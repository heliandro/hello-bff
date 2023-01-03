# Build Stage 1
# This stage builds the application for production
FROM node:18.12.1-alpine3.16 as Stage-1
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Build Stage 2
# This stage install only the production dependencies
FROM node:18.12.1-alpine3.16 as Stage-2
WORKDIR /app
COPY --from=Stage-1 /app/dist ./dist
COPY --from=Stage-1 /app/package*.json ./
RUN npm ci --omit=dev

# Build Stage 3
# This stage builds the final image for production with no root user
FROM node:18.12.1-alpine3.16 as Final
USER node
WORKDIR /app
COPY --chown=node:node --from=Stage-2 /app ./
CMD ["node", "dist/server.js"]