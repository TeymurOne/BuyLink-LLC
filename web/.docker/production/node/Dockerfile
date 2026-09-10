FROM node:20-bullseye-slim

ARG APP=/app

WORKDIR ${APP}

COPY ./ ./

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm install && npm cache clean --force

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "serve"]
