FROM node:22.14.0 as build

WORKDIR /usr/src/app

COPY package*.json ./
 
RUN npm install
 
COPY . .

RUN npm run build

# CMD [ "npm", "run", "dev" ]

FROM nginx:stable-perl 
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]