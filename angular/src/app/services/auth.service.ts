import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {config} from '../config/app.config';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  url = config.apiBaseUrl;
  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'users/register', user, { headers: headers })
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url + 'users/signin', user, { headers: headers })
      .map(res => res.json());
  }

  getUserProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.url + 'users/profile', { headers: headers })
      .map(res => res.json());
  }

  loadToken() {
    const localToken = localStorage.getItem('id_token');
    this.authToken = localToken;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  storeUserdata(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }
}
