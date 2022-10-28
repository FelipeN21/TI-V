import { Component, OnInit } from '@angular/core';
import { Planta } from 'src/app/plantas/planta.model';
import { Plantas } from 'src/app/plantas/plantas';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css'],
})
export class ArduinoComponent implements OnInit {
  lightOn = true;
  bombOn = false;
  PLANTAS: Planta[] = Plantas.PLANTAS;
  plantaSelecionada?: Planta;

  constructor() {}

  ngOnInit(): void {}

  toggleLight() {
    this.lightOn = !this.lightOn;
  }
  toggleBomb() {
    this.bombOn = !this.bombOn;
  }
}
