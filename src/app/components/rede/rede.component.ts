import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-rede',
  templateUrl: './rede.component.html',
  styleUrls: ['./rede.component.css'],
})
export class RedeComponent implements OnInit {
  histTemp: boolean = false;
  histLight: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHistTemp() {
    this.histTemp = !this.histTemp;
  }

  toggleHistLight() {
    this.histLight = !this.histLight;
  }
}
