import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth', 
    loadChildren: () => import(`./modules/auth/auth.module`).then(module => module.AuthModule) 
  },
  {
    path: '', // si no pongo nada, es como poner localhost:4200/
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(module => module.HomeModule) // Lazy loading
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
