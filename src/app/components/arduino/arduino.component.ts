import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css'],
})
export class ArduinoComponent implements OnInit {
  constructor() {}
  CorLuz = true;
  CorBomba = true;

  ngOnInit(): void {}

  public AtivarLuz() {
    if (this.CorLuz == true) this.CorLuz = false;
    else this.CorLuz = true;
  }
  public AtivarBomba() {
    if (this.CorBomba == true) this.CorBomba = false;
    else this.CorBomba = true;
  }
}
