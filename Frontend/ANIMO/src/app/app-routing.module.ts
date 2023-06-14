import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/public/public.module').then( m => m.PublicModule),
  },
  {
    path: 'f',
    loadChildren: () => import('./modules/farmer/farmer.module').then( m => m.FarmerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
