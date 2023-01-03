# Hello Bff

BFF demo em Node.js com Express.js.

## Setup

Tenha o [Docker](https://docs.docker.com/install/) e o Node v18 instalados.

Instale as dependencias:

```bash
npm install
```

## Rodando a aplicação

Para rodar a aplicação, execute:

```bash
npm run dev
```

## Rodando com o Docker

Para rodar a aplicação com o Docker, execute:

```bash
docker build -t heliandro/hello-bff:dev .
docker run --rm -p 3000:80 --name hello-bff heliandro/hello-bff:dev
```

## Build para produção e rodando

Para buildar a aplicação para produção, execute:

```bash
docker build -t heliandro/hello-bff:0.1.0 . -f Dockerfile.prod
docker run --rm -p 3000:80 --name hello-bff heliandro/hello-bff:0.1.0
```

## Envio para o Docker Hub

Para enviar a imagem para o Docker Hub, execute:

```bash
docker push heliandro/hello-bff:0.1.0
```