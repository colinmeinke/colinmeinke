FROM mhart/alpine-node
LABEL name "colinmeinke"
RUN apk add --no-cache make gcc g++ python git
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
