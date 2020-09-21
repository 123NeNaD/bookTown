import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private authService: AuthService;
  username: string = undefined;
  subscription: Subscription;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.authService.loadUserCredentials();
    this.subscription = this.authService.getUsername()
      .subscribe(name => { console.log(name); this.username = name; });
  }

  openLoginForm() {
    const loginRef = this.dialog.open(LoginComponent, { width: '500px', height: '350px' });
    loginRef.afterClosed()
      .subscribe(result => {
        console.log(result);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logOut() {
    this.username = undefined;
    this.authService.logOut();
  }

}
