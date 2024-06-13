FROM mariadb:10.5

RUN apt-get update && apt-get install -y gnupg2 wget lsb-release curl \
    && wget -O- https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | bash \
    && apt-get install -y maxscale \
    && rm -rf /var/lib/apt/lists/*

COPY maxscale.cnf /etc/maxscale.cnf

EXPOSE 3306
CMD ["maxscale", "-d"]
