# Use an official Node.js image as the base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Build the React app
RUN npm run dev

# Expose the port that the app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
