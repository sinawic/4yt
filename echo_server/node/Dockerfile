# Use an official Node.js runtime as the base image
FROM node:20.12.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app will run on
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
