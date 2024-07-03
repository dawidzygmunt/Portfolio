FROM node:20.12.2-alpine as BUILD
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000:3000
CMD ["npm", "start"]