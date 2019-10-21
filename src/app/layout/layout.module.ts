import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonToggleModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    TranslateModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  
  exports: [
    NavBarComponent
  ]
})
export class LayoutModule { }
