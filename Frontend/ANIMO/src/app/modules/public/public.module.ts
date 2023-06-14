import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PublicRoutingModule } from './public-routing.module';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AuthenticationPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
