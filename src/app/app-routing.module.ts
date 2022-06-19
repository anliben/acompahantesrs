import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './shared/erro/erro.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/estados/estados.module').then((m) => m.EstadosModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./pages/perfil/perfil.module').then((m) => m.PerfilModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: 'porto-alegre',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'canoas',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'gravatai',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'cachoerinha',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'alvorada',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'viamao',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'sao-leopoldo',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'novo-hamburgo',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'lageado',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'caxias-do-sul',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'gramado',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'bento-goncalves',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'farroupilha',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'passo-fundo',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'santa-cruz-do-sul',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'pelotas',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'rio-grande',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'bage',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'santa-maria',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'ljui',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'santo-angelo',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'santana-do-livramento',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: 'uruguaiana',
    loadChildren: () =>
      import('./pages/cidades/cidades.module').then((m) => m.CidadesModule),
  },
  {
    path: '**',
    component: ErroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
