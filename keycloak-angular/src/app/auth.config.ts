import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://keycloak.127.0.0.1.nip.io:8080/realms/kokuwa',
  redirectUri: window.location.origin + '/',
  clientId: 'angular',
  dummyClientSecret: 'changeMe',
  requireHttps: false,
  responseType: 'code',
  scope: 'openid',
  showDebugInformation: true,
  timeoutFactor: 0.01
};