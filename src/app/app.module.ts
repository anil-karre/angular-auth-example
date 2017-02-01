import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './user.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login.component';
import { routes } from './app.routes';
import { UserService } from './user.service';

import { LoggedInGuard } from './logged-in.guard';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, LoggedInGuard, UserGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
