FROM mariadb:10.5

RUN apt-get update && apt-get install -y maxscale

COPY maxscale.cnf /etc/maxscale.cnf

CMD ["maxscale", "-f", "/etc/maxscale.cnf"]
