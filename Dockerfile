FROM registry.cn-hangzhou.aliyuncs.com/sblockchain/node:latest
WORKDIR /tmp
COPY package.json /tmp/
RUN cnpm install
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN apk update && cp -a /tmp/node_modules /usr/src/app/
ENV PORT=3000
CMD ["npm", "start"]
EXPOSE 3000
