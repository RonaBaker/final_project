import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoreModule } from '../core/core.module';
import { MatCardModule } from '@angular/material';
import { MessageModule } from '../message/message.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserProfileComponent,  
  ],
  imports: [
    RouterModule,
    RouterModule.forChild([{ path: 'users/:id', component: UserProfileComponent}]),
    CommonModule,
    CoreModule,
    MatCardModule,
    MessageModule,
  ],
  exports: [
    UserProfileComponent,
    RouterModule
  ]
})
export class UserModule { }
