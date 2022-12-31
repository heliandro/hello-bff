FROM node:18.12.1-alpine3.16
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=3000
CMD npm run dev