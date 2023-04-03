# Minimum node version
FROM node:16-alpine

# Working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm ci --only=production
RUN yarn

# Own code
COPY . .

# Port
EXPOSE 3000

# Create production build
RUN yarn build

# Command to start server
CMD ["npm", "start"]