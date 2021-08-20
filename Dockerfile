FROM node:14.16.1
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD apt-get install libnss3-dev libgconf-2-4
CMD npm start
EXPOSE 5000
