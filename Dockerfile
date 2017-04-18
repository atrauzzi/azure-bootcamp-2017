FROM node:latest
MAINTAINER "Alexander Trauzzi" <atrauzzi@gmail.com>

COPY . /app
WORKDIR /app

RUN ["yarn", "install"]
RUN ["bash", "./bin/build_app.sh"]

EXPOSE 80

ENTRYPOINT ["yarn"]
CMD ["server"]