FROM node:20.12.2-alpine as BUILD
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]