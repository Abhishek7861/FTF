# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /Users/abhishek81.singh/Shein/my-react-app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the source code to the container
COPY src ./src

# Copy the public folder to the container
COPY public ./public

# Build the React app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
