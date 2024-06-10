#Set Up
FROM node:alpine AS build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

# Build the Angular application in production mode
RUN ng build

# Ngix Set up
# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=build /usr/src/app/dist/frontend-leichtathletik-vereinsdatenbank/browser /usr/share/nginx/html

# Copy the Nginx configuration file
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
