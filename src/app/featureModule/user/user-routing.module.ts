import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'auth',children:[
    {path:'login',component:SignInComponent},
    {path:'signup',component:SignUpComponent},
  ]},
  {path:'',component:HomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
