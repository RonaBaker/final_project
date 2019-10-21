import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from '../core/core.module';
import { AuthRoutingModule } from './auth.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    AuthRoutingModule,
    CommonModule,
    CoreModule,
    TranslateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AuthModule { }
