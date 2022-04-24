import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { AuthGuard } from './guard';
const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"login", component:LoginPageComponent},
  {path:"home", component:HomePageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
