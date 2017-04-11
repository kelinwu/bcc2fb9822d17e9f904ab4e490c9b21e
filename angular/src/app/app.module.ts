import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FlashMessagesModule  } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomersGridComponent } from './components/dashboard/customers-grid.component';

//service
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { DataService } from './services/data.service';
import {TweetService} from './services/tweet.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CustomersGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'register', component: RegisterComponent},
      {path:'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
      {path:'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path:'login', component: LoginComponent},
      {path:'*', component: HomeComponent}
    ]),
    //other modules
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard,
  DataService,TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
