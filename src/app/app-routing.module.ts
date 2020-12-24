import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCvComponent } from './components/add-cv/add-cv.component';
import { CvComponent } from './components/cv/cv.component';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { RadomImageObserverComponent } from './components/radom-image-observer/radom-image-observer.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { AuthGaurd } from './guards/auth.guards';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cv',children:[
    {path:'', component:CvComponent},
    {path:'add',component:AddCvComponent,canActivate:[AuthGaurd]},
    {path:':id',component:DetailComponent},
  ]},
  {path:'login',component:LoginComponent},
  {path:'observable',component:RadomImageObserverComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
