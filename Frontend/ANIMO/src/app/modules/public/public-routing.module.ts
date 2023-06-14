import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPage } from './pages/authentication/authentication.page';

const routes: Routes = [{
  path: 'authentication',
  component: AuthenticationPage,
},
{
  path: '',
  redirectTo: 'authentication',
  pathMatch: 'full',
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
