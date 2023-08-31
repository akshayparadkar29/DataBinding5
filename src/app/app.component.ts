import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputNumber: number=0; // This will hold the input number
  userInput:number=0

  // You can set this value based on user input or any other source
  setInputNumber(number: number) {
    this.inputNumber = number;
  }
}
