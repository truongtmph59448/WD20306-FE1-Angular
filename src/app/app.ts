import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App { //ko dùng const hay let
  title = 'my-app';
  fullname = 'Angolar 15';
  age = 20;

  //method funtion
  sayHello(){
    console.log('Hello');
  }
}
