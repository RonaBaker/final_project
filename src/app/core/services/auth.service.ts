import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData } from '../model/user';
import { LoginRes } from '../model/loginRes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _currentUser: BehaviorSubject<string>;
  public currentUser: Observable<string>

  constructor(private http: HttpClient) {
    this._currentUser = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this._currentUser.asObservable();
  }

  getCurrentUser() {
    return this._currentUser.value;
  }

  isLoggedIn() {
    if (this._currentUser.getValue() !== null) {
      return true;
    }
    return false;
  }

  login(email: string, password: string) {
    return this.http.post<LoginRes>('http://localhost:3000/api/auth/login', { email: email, password: password })
      .pipe(
        map(res => {
          const username = res.username;
          localStorage.setItem('token', res.token);
          localStorage.setItem('currentUser', username);
          this._currentUser.next(username);
        }))
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this._currentUser.next(null);
  }


   register(registrationData: AuthData, test: File) {
    const userData = new FormData();
    userData.append('username', registrationData.username);
    userData.append('email', registrationData.email);
    userData.append('password', registrationData.password);
    userData.append('avatarUrl', test);
    return this.http.post<AuthData>('http://localhost:3000/api/auth/register', userData);
  }

}
