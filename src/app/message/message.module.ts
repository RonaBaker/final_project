import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModalRemoveMessageComponent } from './modal-remove-message/modal-remove-message.component';
import { ModalReplyMessageComponent } from './modal-reply-message/modal-reply-message.component';
import { MessagePostComponent } from './message-post/message-post.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { CoreModule } from '../core/core.module';
import { MatCardModule, MatButtonModule, MatIconModule, MatInputModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ModalRemoveMessageComponent,
    ModalReplyMessageComponent,
    MessagePostComponent,
    MessageListComponent,
    MessageItemComponent,

  ],
  imports: [
    RouterModule.forChild([{ path: 'home', component: HomeComponent }]),
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    TranslateModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,


  ],
  exports: [
    MessageItemComponent,
    RouterModule
  ],
  entryComponents: [ModalRemoveMessageComponent, ModalReplyMessageComponent],

})
export class MessageModule { }
