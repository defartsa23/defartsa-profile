# Docker Setup for Defartsa Personal Website

This document provides instructions for building and running the Defartsa personal website using Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (optional, but recommended)

## Building and Running with Docker Compose (Recommended)

The easiest way to build and run the application is using Docker Compose:

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

The application will be available at http://localhost:80

## Building and Running with Docker

If you prefer to use Docker directly:

```bash
# Build the image
docker build -t defartsa-website .

# Run the container
docker run -d -p 80:80 --name defartsa-website defartsa-website

# Stop the container
docker stop defartsa-website

# Remove the container
docker rm defartsa-website
```

## Docker Files

- `Dockerfile`: Multi-stage build that compiles the Angular application and serves it with Nginx
- `nginx.conf`: Custom Nginx configuration for serving the Angular application
- `.dockerignore`: Specifies files that should be excluded from the Docker build context
- `docker-compose.yml`: Simplifies the process of building and running the Docker container

## Customization

### Changing the Port

If you want to use a different port on your host machine, modify the `ports` section in `docker-compose.yml`:

```yaml
ports:
  - "8080:80"  # Maps port 80 in the container to port 8080 on the host
```

Or if using Docker directly:

```bash
docker run -d -p 8080:80 --name defartsa-website defartsa-website
```

### Environment Variables

If your application requires environment variables, you can add them to the `docker-compose.yml` file:

```yaml
services:
  web:
    # ... other configuration
    environment:
      - API_URL=https://api.example.com
```

Or if using Docker directly:

```bash
docker run -d -p 80:80 -e API_URL=https://api.example.com --name defartsa-website defartsa-website
```
