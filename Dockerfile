FROM nginx:1.14-alpine

COPY ./dist/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./run.sh /usr/share/run.sh

RUN chmod a+x /usr/share/run.sh

EXPOSE 80

RUN mkdir /app
ADD ./run.sh /app/
WORKDIR /app
RUN chmod a+x ./run.sh

ENTRYPOINT ["./run.sh"]