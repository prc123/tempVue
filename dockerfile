FROM nginx


RUN  sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list

COPY ./dist/ /usr/share/nginx/html/
RUN service nginx start



