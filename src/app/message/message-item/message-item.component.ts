import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Tweet } from '../../core/model/tweet';
import { TweetsService } from '../../core/services/tweets.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalRemoveMessageComponent } from '../modal-remove-message/modal-remove-message.component';
import { ModalReplyMessageComponent } from '../modal-reply-message/modal-reply-message.component';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() tweet: Tweet;
  starredByMe: string;

  constructor(private authService: AuthService, private tweetsService: TweetsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.starredByMe = this.tweet.starredByMe;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  checkMatchUserTweet() {
    return this.authService.getCurrentUser() === this.tweet.username;
  }

  openRemoveDialog() {
    this.dialog.open(ModalRemoveMessageComponent, {
      width: '400px',
      data: this.tweet
    });
  }

  openReplyDialog() {
    this.dialog.open(ModalReplyMessageComponent, {
      width: '400px',
      data: this.tweet
    });
  }

  starToggle() {
    this.tweetsService.starTweet(this.tweet.tweetId).subscribe(
      starredTweet => {
        this.tweet.stars = starredTweet.starsNum;
        this.starredByMe = starredTweet.starredByMe;
      }
    )
  }

}
