import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { RadomImageObserverComponent } from './components/radom-image-observer/radom-image-observer.component';
import { TestObservableComponent } from './components/test-observable/test-observable.component';
import { LoginComponent } from './login/components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cv',component:CvComponent},
  {path:'login',component:LoginComponent},
  {path:'observable',component:RadomImageObserverComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
