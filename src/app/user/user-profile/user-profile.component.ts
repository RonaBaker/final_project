import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { UserDetails } from '../../core/model/user';
import { Tweet } from '../../core/model/tweet';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user: Observable<UserDetails>;
  subscription: Subscription;
  userTweets: Observable<Tweet[]>

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe(u => { this.loadUserProfile(u.get('id')) })
  }

  loadUserProfile(username: string) {
    this.user = this.userService.getUser(username);
    this.userService.loadUserTweets(username);
    this.userTweets = this.userService.getUserTweets();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
