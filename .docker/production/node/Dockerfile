# Serving image
FROM node:20-alpine as builder

ENV NODE_OPTIONS=--openssl-legacy-provider

ARG APP=/app

# Set up the working directory
WORKDIR ${APP}

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:20-alpine

ARG APP=/app

WORKDIR ${APP}

COPY --from=builder /app  .

ENV NODE_OPTIONS=--openssl-legacy-provider

# Specify the host variable
ENV HOST 0.0.0.0

# Expose the Nuxt port
EXPOSE 3000

# Init the command
CMD ["yarn", "start"]
