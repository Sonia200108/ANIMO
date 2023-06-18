import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PublicRoutingModule } from './public-routing.module';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { SharedModule } from '../shared/shared.module';
import { HammerModule } from '@angular/platform-browser';
import { LoginPage } from './pages/login/login.page';


@NgModule({
  declarations: [AuthenticationPage, LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicRoutingModule,
    SharedModule,
    HammerModule
  ]
})
export class PublicModule { }
