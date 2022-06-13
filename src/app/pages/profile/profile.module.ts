import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,

  ],
  providers: [ModalComponent],
})
export class ProfileModule { }
