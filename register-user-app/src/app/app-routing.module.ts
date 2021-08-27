import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from '../app/components/register-user/register-user.component';
import { AnagramComponent } from './components/anagram/anagram.component';

const routes: Routes = [
  {path:'register', component:RegisterUserComponent},   
  {path:'check-anagram', component:AnagramComponent},  
  {path:'', redirectTo:'/register', pathMatch:'full'}, 
  {path:'**', redirectTo:'/register', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
