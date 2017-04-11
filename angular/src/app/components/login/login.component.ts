import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String; password: string;
  constructor(
    private router:Router,
    private _flashMsgServices: FlashMessagesService,
    private _authSvc: AuthService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const loginUser = {
      username: this.username,
      password: this.password
    }
    this._authSvc.authenticateUser(loginUser).subscribe(result =>{
      if(result.success){
        this._flashMsgServices.show(result.msg, { cssClass: 'alert-success', timeout:2000});
        this._authSvc.storeUserdata(result.token, result.user);
        this.router.navigate(['/profile']);
      } else {
        this._flashMsgServices.show(result.msg, {
          cssClass: 'alert-warning',
          timeout:2000
        });
        this.router.navigate(['/login']);
      }
    })
  }
}
