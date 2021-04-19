FROM ubuntu:latest

WORKDIR /app

COPY ./requirements.txt .

RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN  apt-get clean
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install
RUN npm build
COPY . .

EXPOSE 9050

