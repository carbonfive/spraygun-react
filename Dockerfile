FROM node:8.12.0-alpine
WORKDIR /app-prototype
COPY package.json yarn.lock ./
RUN npx yarn@1.10.1 install
COPY . .
RUN npm run build
EXPOSE 5000
ENV NODE_ENV=production
CMD npx --no-install serve -s
