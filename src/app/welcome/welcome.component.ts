import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

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
