import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FotoPerfilComponent } from '../../components/foto-perfil/foto-perfil.component';
import { BannerDeCidadesComponent } from '../../components/banner-de-cidades/banner-de-cidades.component';
import { StoryComponent } from '../../components/story/story.component';
import { SuaPaginaComponent } from '../../components/sua-pagina/sua-pagina.component';
import { PlanosComponent } from '../../components/planos/planos.component';
import { EditProfileComponent } from '../../components/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'foto-perfil',
    component: FotoPerfilComponent
  },
  {
    path: 'banner-cidades',
    component: BannerDeCidadesComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'sua-pagina',
    component: SuaPaginaComponent
  },
  {
    path: 'planos',
    component: PlanosComponent
  },
  {
    path: 'edit-profile',
    component: EditProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
