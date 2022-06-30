import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { EditProfileComponent } from '../../components/edit-profile/edit-profile.component';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  providers: [ModalComponent,EditProfileComponent,],
})
export class ProfileModule { }
