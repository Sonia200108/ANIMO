import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmerPageRoutingModule } from './farmer-routing.module';

import { SharedModule } from '../shared/shared.module';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';
import { MainmapPage } from './pages/mainmap/mainmap.page';
import { BlimpmapPage } from './pages/blimpmap/blimpmap.page';
import { BlimpcontrolPage } from './pages/blimpcontrol/blimpcontrol.page';
import { BlimpInfoPage } from './pages/blimp-info/blimp-info.page';
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmerPageRoutingModule,
    SharedModule,
    HammerModule
  ],
  declarations: [DashboardPage, ProfilePage, MainmapPage, BlimpmapPage, BlimpcontrolPage, BlimpInfoPage]
})
export class FarmerPageModule {}
