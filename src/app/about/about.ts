import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  title = 'about';
  name = 'Nguyen Van A';
  age = 25;

  handleClick(){
     alert("Bạn đã click button");
  }
}