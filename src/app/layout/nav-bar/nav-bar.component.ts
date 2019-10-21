import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  loggedIn: boolean;
  subscription: Subscription;
  langs: string[] = ['en', 'es'];
  constructor(
    private authService: AuthService, 
    private router: Router, 
    private translate: TranslateService, 
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher) {
      this.initTranslate();

      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.subscription = this.authService.currentUser.subscribe(currentUser => {
      if (currentUser !== null) {
        this.loggedIn = true;
      }
      else this.loggedIn = false;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  initTranslate() {
    this.translate.setDefaultLang('en');
    if (localStorage.getItem('currentLang')) {
      this.translate.use('en');
    }
    this.translate.use(localStorage.getItem('currentLang'));
    this.translate.addLangs(this.langs);
  }

  login() {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
      this.router.navigate(['/']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  changeTranslate(lang: string) {
    localStorage.setItem('currentLang', lang);
    this.translate.use(lang);
  }



}




