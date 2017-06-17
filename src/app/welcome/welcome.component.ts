import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: '<h1>Welcome, {{name}}</h1>',
  styles: [`
  h1{
    text-align:center;
  }
  `]
})
export class WelcomeComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = "Mohammed Abdelhay"
  }

}
