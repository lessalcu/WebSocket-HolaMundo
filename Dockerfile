# Using the official Node.js image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the project files into the container
COPY . .

# Install project dependencies
RUN npm install

# Expose port 3000 for the server
EXPOSE 3000

# Command to run the server
CMD ["node", "index.js"]