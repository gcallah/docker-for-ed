FROM node:10-alpine AS build

WORKDIR /mnt

ADD package.json .
ADD public ./public
ADD src ./src

RUN npm install

FROM node:10-alpine

ENV ENV="/etc/profile"
RUN apk add --update --no-cache bash nano tree \
    rm -rf /var/cache/apk/*

WORKDIR /home

COPY --from=build /mnt/package.json .
COPY --from=build /mnt/public ./public
COPY --from=build /mnt/node_modules ./node_modules
COPY --from=build /mnt/src/ ./src
ADD .ashrc .

RUN cat .ashrc >> "$ENV"

CMD ["npm", "start"]
