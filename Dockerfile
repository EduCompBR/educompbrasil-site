# Use uma imagem Node.js LTS otimizada e mais leve
FROM node:22-alpine

# Instalar tini e curl para lidar com sinais e healthcheck
RUN apk add --no-cache tini curl

# Definir variáveis de ambiente para otimização
ENV NODE_ENV=production
ENV PORT=3000

# Criar usuário não-root para segurança
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências primeiro (para aproveitar cache do Docker)
COPY package*.json ./

# Instalar dependências apenas de produção
RUN npm ci --only=production && \
    npm cache clean --force

# Copiar código da aplicação
COPY . .

# Remover arquivos desnecessários para produção
RUN rm -rf .git* README.md SECURITY.md

# Alterar proprietário dos arquivos para o usuário não-root
RUN chown -R appuser:appgroup /app

# Mudar para usuário não-root
USER appuser

# Expor a porta
EXPOSE $PORT

# Verificação de saúde
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl --fail --silent http://localhost:$PORT/ || exit 1

# Usar tini como init system e iniciar a aplicação
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["node", "index.js"]