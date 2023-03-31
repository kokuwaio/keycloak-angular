# hadolint ignore=DL3007
FROM pierrezemb/gostatic:latest

# https://github.com/opencontainers/image-spec/blob/main/annotations.md
LABEL org.opencontainers.image.title       Example App
LABEL org.opencontainers.image.description Keycloak Angular example App
LABEL org.opencontainers.image.url         https://github.com/kokuwaio/keycloak-angular
LABEL org.opencontainers.image.source      https://github.com/kokuwaio/keycloak-angular
LABEL org.opencontainers.image.vendor      Kokuwa.io Team
LABEL org.opencontainers.image.authors     https://github.com/orgs/kokuwaio/people
LABEL org.opencontainers.image.base.name   pierrezemb/gostatic

COPY dist/keycloak-angular /srv/http

CMD ["-enable-health", "-port=8080"]
