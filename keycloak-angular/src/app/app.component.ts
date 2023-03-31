import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from './auth.config';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'keycloak-angular';
  constructor(private oauthService: OAuthService, private backendService: BackendService) {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin();
    

    // Automatically load user profile
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => this.oauthService.loadUserProfile());
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  get response(): string {
    return this.backendService.getResponse;
  }

  refresh() {
    this.oauthService.refreshToken();
  }

  request() {
    this.backendService.requestBackend(this.oauthService.getAccessToken());
  }

} 
