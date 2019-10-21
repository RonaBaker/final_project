import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../core/services/tweets.service';
import { Observable, interval, Subscription } from 'rxjs';
import { Tweet } from '../../core/model/tweet';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  subscription: Subscription;
  tweets: Observable<Tweet[]>;

  constructor(private tweetsService: TweetsService) { }

  ngOnInit() {

    this.tweets = this.tweetsService.getTweets();
    this.subscription = interval(10000)
      .pipe(
        startWith(0))
      .subscribe(
        () => this.tweetsService.loadTweets()
      );
  }

  ngOnDestoy() {
    this.subscription.unsubscribe();
  }
}

