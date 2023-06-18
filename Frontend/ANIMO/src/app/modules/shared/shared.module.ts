import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NewuserPage } from './pages/newuser/newuser.page';
import { IonicModule } from '@ionic/angular';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { ChooseFarmPage } from './pages/choose-farm/choose-farm.page';
import { FormsModule } from '@angular/forms';
import { CreateUserPage } from './pages/create-user/create-user.page';
import { HammerModule } from '@angular/platform-browser';
import { CreateFarmPage } from './pages/create-farm/create-farm.page';

@NgModule({
  declarations: [NewuserPage, MapComponent,SearchFilterPipe, ChooseFarmPage, CreateUserPage, CreateFarmPage],
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule,
    LeafletModule,
    FormsModule,
    HammerModule
  ],
  exports: [NewuserPage, MapComponent,SearchFilterPipe, ChooseFarmPage, CreateUserPage, CreateFarmPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
