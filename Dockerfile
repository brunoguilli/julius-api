# Esse arquivo é necessário para dockerizar o projeto em si

# Criam imagem do NODE v:12
FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]