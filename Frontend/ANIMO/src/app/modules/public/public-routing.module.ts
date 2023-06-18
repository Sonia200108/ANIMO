import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPage } from './pages/authentication/authentication.page';
import { LoginPage } from './pages/login/login.page';
import { NewuserPage } from '../shared/pages/newuser/newuser.page';
import { ChooseFarmPage } from '../shared/pages/choose-farm/choose-farm.page';
import { CreateUserPage } from '../shared/pages/create-user/create-user.page';
import { CreateFarmPage } from '../shared/pages/create-farm/create-farm.page';

const routes: Routes = [{
  path: 'authentication',
  component: AuthenticationPage,
},
{
  path: 'login',
  component: LoginPage,
},
{
  path: '',
  redirectTo: 'authentication',
  pathMatch: 'full',
},
{
  path: 'newuser',
  component: NewuserPage

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
  path: 'createfarm',
  component: CreateFarmPage
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
