import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(private auth: AuthService, private http: HttpClient) {
   }

  getToken() {
    return localStorage.getItem('access_token') || '';
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  hasToken() {
    return !!this.getToken();
  }

  removeToken() {
    localStorage.removeItem('access_token');
  }

  logout(logoutFromAuth0: boolean) {
    this.removeToken();

    if (logoutFromAuth0) {
      this.auth.logout({ logoutParams: {
        returnTo: 'http://localhost:4200/authentication',
      } });
    }

  }

  setCurrentUser(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }


  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }
}
