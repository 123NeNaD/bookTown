import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authService: AuthService;
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  backgroundImage: string = "./assets/images/background.jpg"
  hide = true;
  user = {
    username: '',
    password: ''
  };
  errMess: string;

  onSubmit() {
    console.log('User: ', this.user);
    this.authService.logIn(this.user)
      .subscribe(res => {
        if (res.success) {
          this.dialogRef.close(res.success);
        } else {
          console.log(res);
        }
      },
        error => {
          console.log(error);
          this.errMess = error;
        });
  }

}
