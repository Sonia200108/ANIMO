import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AuthGuard } from '../shared/guard/auth.guard';
import { NewuserPage } from '../shared/pages/newuser/newuser.page';
import { MainmapPage } from './pages/mainmap/mainmap.page';
import { BlimpmapPage } from './pages/blimpmap/blimpmap.page';
import { BlimpcontrolPage } from './pages/blimpcontrol/blimpcontrol.page';
import { BlimpInfoPage } from './pages/blimp-info/blimp-info.page';
import { NewFarmPage } from '../shared/pages/new-farm/new-farm.page';
import { ChooseFarmPage } from '../shared/pages/choose-farm/choose-farm.page';
import { CreateUserPage } from '../shared/pages/create-user/create-user.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardPage,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfilePage,
        canActivate: [AuthGuard]
      },
      {
        path: 'mainmap/:farmid',
        component: MainmapPage,
        canActivate: [AuthGuard]
      },
      {
        path: 'newuser',
        component: NewuserPage

      },
      {
        path: 'newfarm',
        component: NewFarmPage
      },
      {
        path: 'choosefarm',
        component: ChooseFarmPage
      },
      {
        path: 'createuser/:farmid',
        component: CreateUserPage
      },
      {
        path: 'blimpmap/:blimpid',
        component: BlimpmapPage,
        canActivate: [AuthGuard]
      },
      {
        path: 'blimpcontrol/:blimpid',
        component	: BlimpcontrolPage,
        canActivate: [AuthGuard]
      },
      {
        path: 'blimpinfo/:blimpid',
        component: BlimpInfoPage,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: DashboardPage

      },

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerPageRoutingModule {}
