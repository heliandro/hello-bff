# Hello Bff

BFF demo em Node.js com Express.js.

## Setup

Tenha o [Docker](https://docs.docker.com/install/) e o Node v18 instalados.

## Build e Run

Para buildar a aplicação, execute:

```bash
docker-compose build
```

Para rodar a aplicação, execute:

```bash
docker-compose up
```

## Upload de arquivos

Para fazer upload de arquivos, execute:

```bash
curl -X POST http://localhost:3000/upload \
     -F file=@/home/username/Pictures/my-image.jpg
```

## Download de arquivos

Para fazer download de arquivos, execute:

```bash
curl -X GET http://localhost:3000/download/file-name.extension \
    -O --output-dir /home/usuario/Downloads
```