import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css'],
})
export class ArduinoComponent implements OnInit {
  lightOn = true;
  bombOn = false;

  constructor() {}

  ngOnInit(): void {}

  toggleLight() {
    this.lightOn = !this.lightOn;
  }
  toggleBomb() {
    this.bombOn = !this.bombOn;
  }
  
}
