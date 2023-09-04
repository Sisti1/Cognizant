import { Component } from '@angular/core';
// import { AuthService } from '../authstatus.service';
@Component({
  selector: 'app-header',
  // template:
  //   '<button *ngIf="authService.isAuthenticated">Authenticated Button</button> <button *ngIf="!authService.isAuthenticated">Guest Button</button>',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // constructor(public authService: AuthService) {}
}
