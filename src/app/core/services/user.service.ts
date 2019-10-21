import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../model/user';
import { Tweet } from '../model/tweet';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _userTweets = new BehaviorSubject<Tweet[]>([]);
  userTweets = this._userTweets.asObservable();

  constructor(private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get<UserDetails>(`http://localhost:3000/api/members/${username}`)
  }

  loadUserTweets(username: string) {
    this.http.get<Tweet[]>(`http://localhost:3000/api/members/${username}/tweets`)
    .subscribe(tweets => {
      this._userTweets.next(tweets);
    })
  }
  getUserTweets() {
    return this.userTweets;
  }
}
