# Use an official Node runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Copy the remaining app source code to the working directory

# Expose the port the app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
