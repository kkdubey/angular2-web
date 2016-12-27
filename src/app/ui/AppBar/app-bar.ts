import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-bar',
  styleUrls: [`app/ui/AppBar/app-bar.style.css`],
  templateUrl: `app/ui/AppBar/app-bar.tpl.html`
})
export class AppBar {
  menus = [];
  isLoggedIn = false;
  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isAuthorized();
    this.menus = this.authService.getMenus(this.authService.isAuthorized());
  }
  
  signOut() {
    this.authService.signout();
  }
  createMenu () {
    this.isLoggedIn = this.authService.isAuthorized();
    this.menus = this.authService.getMenus(this.authService.isAuthorized());
  }
}
