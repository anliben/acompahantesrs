import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './shared/erro/erro.component';

const routes: Routes = [

  { path: '', redirectTo: 'pais', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'estados',
    loadChildren: () => import('./pages/estados/estados.module').then(m => m.EstadosModule)
  },
  {
    path: 'cidades',
    loadChildren: () => import('./pages/cidades/cidades.module').then(m => m.CidadesModule)
  },
  {
    path: 'pais',
    loadChildren: () => import('./pages/pais/pais.module').then(m => m.PaisModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'erro',
    component: ErroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
