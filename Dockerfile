# Fetching the node js image (linux)  and set name development
FROM node:18.13.0 AS builder

# Setting up the work directory
WORKDIR /pattern-app-prod

# Сopies package.json from our local directory to the /pattern-app
COPY ./package.json ./

# Installing dependencies
RUN npm install

# Сopies all the files in our local directory to the /pattern-app
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /pattern-app-prod/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf