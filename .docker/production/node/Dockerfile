# Use Node.js 20 Alpine image as the base for the build stage
FROM node:20-alpine as builder

# Set an ARG for the application directory
ARG APP=/app

# Set up the working directory
WORKDIR ${APP}

# Copy all files from the current directory to the working directory in the container
COPY . .

# Install dependencies, disabling interactive mode and freezing lockfile for consistency
RUN npm install --prefer-offline --frozen-lockfile --non-interactive

# Build the project
RUN npm run build

# Clean up unnecessary files to reduce the image size
RUN rm -rf node_modules && \
    NODE_ENV=production npm install \
    --prefer-offline --frozen-lockfile --non-interactive --production

# Use Node.js 20 Alpine image as the base for the production stage
FROM node:20-alpine

# Set an ARG for the application directory
ARG APP=/app

# Set up the working directory
WORKDIR ${APP}

# Copy the built application from the builder stage
COPY --from=builder ${APP} .

# Set environment variables
ENV NODE_OPTIONS="--openssl-legacy-provider"
ENV HOST="0.0.0.0"

# Expose the Nuxt.js application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
