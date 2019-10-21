import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tweet } from '../../core/model/tweet';


@Component({
  selector: 'app-modal-reply-message',
  templateUrl: './modal-reply-message.component.html',
  styleUrls: ['./modal-reply-message.component.css']
})
export class ModalReplyMessageComponent implements OnInit {

  tweetContent: string;

  constructor(public dialogRef: MatDialogRef<ModalReplyMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public tweet: Tweet) { }

  ngOnInit() {
    this.tweetContent = null;
  }

  closeModalWindow(): void {
    this.dialogRef.close();
  }

}
