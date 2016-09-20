FROM mhart/alpine-node:6.2.0
LABEL name "colinmeinke"
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN apk add --no-cache make gcc g++ python git
RUN npm install
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
