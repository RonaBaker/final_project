import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Tweet } from '../model/tweet';
import { HttpClient } from '@angular/common/http';
import { Star } from '../model/star';


@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  private _tweets = new BehaviorSubject<Tweet[]>([]);
  tweets = this._tweets.asObservable();

  constructor(private http: HttpClient) {
    this.loadTweets();
  }

  loadTweets() {
    return this.http.get<Tweet[]>('http://localhost:3000/api/tweets')
      .subscribe(tweets => {
        this._tweets.next(tweets);
      });
  }

  getTweets(): Observable<Tweet[]> {
    return this.tweets;
  }

  setTweet(tweetContent: string) {
    return this.http.post('http://localhost:3000/api/tweets', { tweetContent })
      .subscribe();

  }

  removeTweet(tweet: Tweet) {
    // this.http.delete(`http://localhost:3000/api/tweets/${tweet.tweetId}`).subscribe();
      return this.http.delete(`http://localhost:3000/api/tweets/${tweet.tweetId}`);

  }

  starTweet(tweetId: string) {
    return this.http.post<Star>(`http://localhost:3000/api/tweets/${tweetId}/star-toggle`, {});
  }

  

}
