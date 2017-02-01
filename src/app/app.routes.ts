// app.routes.ts
import { LoggedInGuard } from './logged-in.guard';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './user.component';
import { AdminComponent } from './admin.component';

export const routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard] },
  { path: 'user', component: UserComponent, canActivate: [LoggedInGuard, UserGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard, AdminGuard] }
];
