import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenteComponent } from './components/gente/gente.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'miperfil/:id', component: MiPerfilComponent },
  { path: 'useredit', component: UserEditComponent },
  { path: 'gente', component: GenteComponent },
  { path: 'gente/:page', component: GenteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
