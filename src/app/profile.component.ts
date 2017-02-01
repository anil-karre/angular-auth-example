// profile.component.ts
import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'auth-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  constructor(private user: UserService) {}
}
