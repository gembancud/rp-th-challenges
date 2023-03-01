# Use an official Node.js runtime as a parent image
FROM node:14-alpine

#create a working directory inside the container.
WORKDIR /app

COPY ./package*.json ./
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm start --host 0.0.0.0 --port 3000 --disableHostCheck true
