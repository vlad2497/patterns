# Run local

## Required node.js 18.13.0

### In the project directory, you can run:

### `npm install`

### `npm start`

# Run via Docker Image (DEV)

## Required Docker

### `docker build -f Dockerfile.dev -t pattern_app_dev:latest .`

### `docker run -p 3000:3000 --rm --name pattern_app_dev.container pattern_app_dev:latest`

### `open in browser http://localhost:3000`

### `docker stop pattern_app_dev.container`

# Run via Docker Image (PROD)

## Required Docker

### `docker build -f Dockerfile -t pattern_app_prod:latest .`

### `docker run -p 3000:80 --rm --name pattern_app_prod.container pattern_app_prod:latest`

### `open in browser http://localhost:3000`

### `docker stop pattern_app_prod.container`
