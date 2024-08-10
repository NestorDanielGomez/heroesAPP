import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfountPageComponent } from './shared/pages/notfount-page/notfount-page.component';

import { publicCanActivateGuard, publicCanMatchGuard } from './auth/guards/public.guard';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: ()=> import ("./auth/auth.module").then (module => module.AuthModule),
    canActivate: [publicCanActivateGuard],
    canMatch: [publicCanMatchGuard]
  },
  {
    path: "heroes",
    loadChildren: ()=> import ("./heroes/heroes.module").then (module => module.HeroesModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: "404",
    component: NotfountPageComponent
  },
  {
    path: "",
    redirectTo: "heroes",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
