# Keycloak Angular Integration

This is an example project for the integration of Keycloak in an Angular SPA.

## Project structure

- [frontend](keycloak-angular) contains Angular frontend
- [backend](frontend) contains simple Micornaut backend with http path `/public` and `/protected`
- [test](test) contains tests with k3s (using k3s-maven-plugin)

## Run

```sh
mvn clean package -T1C -pl \!test
mvn clean integration-test -pl test
```

Open: <http://help.127.0.0.1.nip.io:8080>
