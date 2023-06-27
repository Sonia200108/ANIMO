import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AuthGuard } from '../shared/guard/auth.guard';
import { MainmapPage } from './pages/mainmap/mainmap.page';
import { BlimpmapPage } from './pages/blimpmap/blimpmap.page';
import { BlimpcontrolPage } from './pages/blimpcontrol/blimpcontrol.page';
import { BlimpInfoPage } from './pages/blimp-info/blimp-info.page';
import { BlimpvideoPage } from './pages/blimpvideo/blimpvideo.page';

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
      {
        path: 'blimpvideo/:blimpid',
        component: BlimpvideoPage,
        canActivate: [AuthGuard]
      }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmerPageRoutingModule {}
