FROM node:20-alpine

RUN apk add --no-cache tzdata

ENV TZ=Asia/Baku

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV NODE_OPTIONS=--openssl-legacy-provider

WORKDIR /app

EXPOSE 3000
