import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _flashMessagesSvc: FlashMessagesService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick() {
    this.authService.logout();
    this._flashMessagesSvc.show('Success Logout!', {
      cssClass: 'alert-success',
      timeout: 2000
    });

    this.router.navigate(['/login']);
    return false;
  }

}
