// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email, password) {
    if (email === 'admin' && password === '123456') {
      this.loggedIn = true;
      localStorage.setItem('admin', 'true');
      localStorage.setItem('user', 'true');
      localStorage.setItem('auth_token', 'admin123');
      return true;
    } else if (email === 'user' && password === '123456') {
      this.loggedIn = true;
      localStorage.setItem('user', 'true');
      localStorage.setItem('auth_token', 'user123');
      return true;
    }

    return false;

    /* let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login',
        JSON.stringify({ email, password }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });*/
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('admin');
    localStorage.removeItem('user');
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('auth_token');
  }

  isAdmin() {
    return !!localStorage.getItem('admin');
  }

  isUser() {
    return !!localStorage.getItem('user');
  }
}
