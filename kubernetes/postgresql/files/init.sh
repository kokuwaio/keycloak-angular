#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL

    CREATE DATABASE "keycloak";
    CREATE USER "keycloak" WITH ENCRYPTED PASSWORD 'changeMe';
    GRANT ALL PRIVILEGES ON DATABASE "keycloak" TO "keycloak";

EOSQL
