# Include file with .env variables if exists
-include .env

# Define default values for variables
COMPOSE_FILE ?= docker-compose-production.yml
REGISTRY ?= localhost
IMAGE_TAG ?= latest

#-----------------------------------------------------------
# Management
#-----------------------------------------------------------

# Create shared gateway network
gateway:
	docker network create gateway

# Init variables for development environment
dev:
	cp ./.env.dev ./.env

# Init variables for production environment
prod:
	cp ./.env.prod ./.env

# Build and restart containers
install: build up

# Start containers
up:
	docker-compose -f ${COMPOSE_FILE} up -d

# Stop containers
down:
	docker-compose -f ${COMPOSE_FILE} down --remove-orphans

# Build containers
build:
	DOCKER_BUILDKIT=1 COMPOSE_DOCKER_CLI_BUILD=1 docker-compose -f ${COMPOSE_FILE} build --build-arg BUILDKIT_INLINE_CACHE=1

# Show list of running containers
ps:
	docker-compose -f ${COMPOSE_FILE} ps

# Restart containers
restart:
	docker-compose -f ${COMPOSE_FILE} restart

# Reboot containers
reboot: down up

# View output from containers
logs:
	docker-compose -f ${COMPOSE_FILE} logs --tail 500

# Follow output from containers (short for 'follow logs')
fl:
	docker-compose -f ${COMPOSE_FILE} logs --tail 500 -f

# Prune stopped docker containers and dangling images
prune:
	docker system prune

#-----------------------------------------------------------
# Application
#-----------------------------------------------------------

# Enter the front container
front:
	docker-compose -f ${COMPOSE_FILE} exec -it front sh

# Install yarn dependencies
yarn.install:
	docker-compose -f ${COMPOSE_FILE} run --rm --no-deps front yarn install

# Alias to install yarn dependencies
yi: yarn.install

# Upgrade yarn dependencies
yarn.upgrade:
	docker-compose -f ${COMPOSE_FILE} run --rm --no-deps front yarn upgrade

# Upgrade yarn dependencies
yarn.build:
	docker-compose -f ${COMPOSE_FILE} run --rm front yarn build

# Alias to upgrade yarn dependencies
yu: yarn.upgrade

# Show outdated yarn dependencies
yarn.outdated:
	docker-compose exec -f ${COMPOSE_FILE} front yarn outdated

#-----------------------------------------------------------
# Swarm
#-----------------------------------------------------------

# Deploy the stack
swarm.deploy:
	docker stack deploy --compose-file ${COMPOSE_FILE} front

# Remove/stop the stack
swarm.rm:
	docker stack rm front

# List of stack services
swarm.services:
	docker stack services front

# List the tasks in the stack
swarm.ps:
	docker stack ps front

# Init the Docker Swarm Leader node
swarm.init:
	docker swarm init

build-prod: build-front push

build-front:
	DOCKER_BUILDKIT=1 docker --log-level=debug build --pull --build-arg BUILDKIT_INLINE_CACHE=1 \
            --cache-from ${REGISTRY}/front:latest \
            --tag ${REGISTRY}/front:latest \
            --tag ${REGISTRY}/front:${IMAGE_TAG} \
            --file .docker/production/node/Dockerfile .

deploy:
	ssh -o StrictHostKeyChecking=no root@${HOST} 'rm -rf front'
	ssh -o StrictHostKeyChecking=no root@${HOST} 'mkdir front'
	scp -o StrictHostKeyChecking=no docker-compose-production.yml root@${HOST}:front/docker-compose-production.yml
	scp -o StrictHostKeyChecking=no .env.prod root@${HOST}:front/.env
	scp -o StrictHostKeyChecking=no Makefile root@${HOST}:front/Makefile
	ssh -o StrictHostKeyChecking=no root@${HOST} 'cd front && REGISTRY=${REGISTRY} docker-compose pull'
	ssh -o StrictHostKeyChecking=no root@${HOST} 'cd front && REGISTRY=${REGISTRY} docker-compose up --remove-orphans -d'

update-frontend-notification-server:
	ssh -o StrictHostKeyChecking=no root@${HOST} 'cd api && make update-frontend-notification'

bs:
	ssh -o StrictHostKeyChecking=no root@${HOST} 'make build'

bsa:
	ssh -o StrictHostKeyChecking=no root@${HOST} 'make build.api'

bsf:
	ssh -o StrictHostKeyChecking=no root@${HOST} 'make build.front'

push:
	 docker-compose -f ./docker-compose.yml push
