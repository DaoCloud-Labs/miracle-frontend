FROM nginx:1.14-alpine

COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./run.sh /run.sh

EXPOSE 80

CMD run.sh
