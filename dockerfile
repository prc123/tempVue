FROM node:latest

WORKDIR /app

RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list

COPY . .

RUN npm install --registry https://registry.npm.taobao.org
RUN npm build


EXPOSE 9050

