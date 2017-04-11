import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  password: String;
  email: String;

  constructor(
    private _router: Router,
    private _authSvc: AuthService,
    private _flashmessagesSvc: FlashMessagesService,
    private _validateSvc: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email
    };
    //validate form input
    if (!this._validateSvc.validateRegister(user)) {
      this._flashmessagesSvc.show('Form is invalid', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //validate email
    if (!this._validateSvc.validateEmail(user.email)) {
      this._flashmessagesSvc.show('Email is invalid', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //regi user
    this._authSvc.registerUser(user).subscribe(result => {
      if (result.success) {
        this._flashmessagesSvc.show(result.msg, { cssClass: 'alert-success', timeout: 3000 });
        this._router.navigate(['/login']);
      } else {
        this._flashmessagesSvc.show(result.msg, { cssClass: 'alert-danger', timeout: 3000 });
        this._router.navigate(['/register']);
      }
    })


  }

}
