# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 
RUN npm install -g nodemon 

COPY . .

# Set the command to run the app with nodemon for live reloading
CMD [ "node", "index.js" ]
