import { Component, OnInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';
import { TweetsService } from '../../core/services/tweets.service';
import { AuthService } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';
import { Observable } from 'rxjs';
import { UserDetails } from '../../core/model/user';


@Component({
  selector: 'app-message-post',
  templateUrl: './message-post.component.html',
  styleUrls: ['./message-post.component.css']
})
export class MessagePostComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() tweetPlaceHolder: string;
  user: Observable<UserDetails>;
  tweetContent: string;
  maxInputLength;

  constructor(private tweetsService: TweetsService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.maxInputLength = 240
    this.tweetContent = null;
    const username = this.authService.getCurrentUser();
    this.user = this.userService.getUser(username);
  }

  postTweet() {
    this.tweetsService.setTweet(this.tweetContent);
    this.tweetsService.loadTweets();
    this.tweetContent = null;
    this.close.emit();
  }

}
