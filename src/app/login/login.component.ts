import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backgroundImage: string = "./assets/images/background.jpg"
  hide = true;
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('CAOACOACOACO');
  }

}
