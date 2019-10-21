import { Component, OnInit, Inject } from '@angular/core';
import { Tweet } from '../../core/model/tweet';
import { TweetsService } from '../../core/services/tweets.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-modal-remove-message',
  templateUrl: './modal-remove-message.component.html',
  styleUrls: ['./modal-remove-message.component.css']
})
export class ModalRemoveMessageComponent implements OnInit {

  constructor(private userService: UserService, private tweetsService: TweetsService, public dialogRef: MatDialogRef<ModalRemoveMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public tweet: Tweet) { }

  ngOnInit() {
  }

  closeModalWindow(): void {
    this.dialogRef.close();
  }

  removeTweet() {
    this.tweetsService.removeTweet(this.tweet)
    .subscribe(() => {
      this.tweetsService.loadTweets();
      this.userService.loadUserTweets(this.tweet.username);
    })

  }

}
