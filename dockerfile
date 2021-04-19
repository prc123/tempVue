FROM node:latest

WORKDIR /app

RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN  apt-get clean
RUN apt-get update

COPY . .

RUN npm install --registry https://registry.npm.taobao.org install express
RUN npm build


EXPOSE 9050

