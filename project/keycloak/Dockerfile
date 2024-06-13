FROM quay.io/keycloak/keycloak:latest

COPY keycloak-config.json /opt/keycloak/data/import/keycloak-config.json

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev", "--import-realm"]
