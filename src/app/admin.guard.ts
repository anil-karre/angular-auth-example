// admin.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate() {
    if(this.user.isAdmin()) {
      return true;
    } else {
      this.router.navigate(['/profile']);
      return false;
    }
  }
}
