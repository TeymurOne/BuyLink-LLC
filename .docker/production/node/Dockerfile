# Serving image
FROM node:18-alpine as builder

ENV NODE_OPTIONS=--openssl-legacy-provider

ENV NUXT_TELEMETRY_DISABLED=1

ARG APP=/app

# Set up the working directory
WORKDIR ${APP}

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build:modern

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:18-alpine

ARG USER=hire
ARG APP=/app

RUN addgroup -S appgroup && adduser -u 1001 -S ${USER} -G appgroup

WORKDIR ${APP}

COPY --from=builder /app  .

ENV NODE_OPTIONS=--openssl-legacy-provider

ENV NUXT_TELEMETRY_DISABLED=1

USER ${USER}

# Specify the host variable
ENV HOST 0.0.0.0

# Expose the Nuxt port
EXPOSE 3000

# Init the command
CMD ["yarn", "start:modern"]
