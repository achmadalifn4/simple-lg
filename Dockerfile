FROM node:20-bullseye-slim

WORKDIR /app

ADD . /app/

RUN apt update && \
    apt install -y iputils-ping traceroute whois libsocket-getaddrinfo-perl && \
    ln -s /bin/ping /usr/bin/ping && \
    apt clean && rm -rf /var/lib/apt/lists/*

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]