FROM node:14.16.0-alpine
WORKDIR /app-prototype
COPY package.json yarn.lock ./
RUN npx yarn@1.12.1 install --production
COPY . .
RUN npm run build
EXPOSE 5000
ENV NODE_ENV=production
CMD npx --no-install serve -s
