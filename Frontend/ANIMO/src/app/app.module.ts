import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { domain, clientId, callbackUri, audience } from './auth.config';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpAuthInterceptor } from './modules/shared/interceptor/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QRCodeModule } from 'angularx-qrcode';

const config: AuthConfig = {
  domain,
  clientId,
  authorizationParams: {
    redirect_uri: callbackUri,
    audience: audience,
    scope: 'openid profile email read:users',
  },
  useRefreshTokens: true
  
};

@NgModule({
    declarations: [AppComponent],
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
        IonicModule.forRoot({
          animated: false,
        }),
        HttpClientModule,
        AppRoutingModule,
        AuthModule.forRoot(config),
        HammerModule,
        QRCodeModule
    ],
    providers: [HttpAuthInterceptor],
    bootstrap: [AppComponent],
    exports: [CommonModule]
})
export class AppModule {}
