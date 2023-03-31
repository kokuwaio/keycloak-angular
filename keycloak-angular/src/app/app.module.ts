import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './backend.service';

@NgModule({
  imports: [BrowserModule, OAuthModule.forRoot(), HttpClientModule],
  declarations: [AppComponent],
  providers: [
    BackendService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}