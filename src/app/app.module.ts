import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { CidadesComponent } from './pages/cidades/cidades.component';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { BannerDeCidadesComponent } from './components/banner-de-cidades/banner-de-cidades.component';
import { StoryComponent } from './components/story/story.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SuaPaginaComponent } from './components/sua-pagina/sua-pagina.component';
import { PlanosComponent } from './components/planos/planos.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ErroComponent } from './shared/erro/erro.component';
import { SuaPaginaModule } from './components/sua-pagina/sua-pagina.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EstadosComponent,
    CidadesComponent,
    MenuComponent,
    PerfilComponent,
    FotoPerfilComponent,
    BannerDeCidadesComponent,
    ProfileComponent,
    StoryComponent,
    PlanosComponent,
    EditProfileComponent,
    ModalComponent,
    ErroComponent,
    SuaPaginaComponent,
    AnuncioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SuaPaginaModule,
    HttpClientModule,
    ServiceWorkerModule.register('sw.js'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [ModalComponent, ScreenTrackingService,UserTrackingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
