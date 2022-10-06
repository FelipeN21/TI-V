import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-rede',
  templateUrl: './rede.component.html',
  styleUrls: ['./rede.component.css'],
})
export class RedeComponent implements OnInit {
  interval = setInterval(() => {
    this.firulinha(this.lightGraphValue);
  }, 500);

  // Variáveis de luminosidade
  histLight: boolean = false;
  lightGraphValue: number = 82;
  lightGaugeMergeOptions = {};
  lightLineMergeOptions = {};
  lightLinesData: number[] = [0];
  lightLinesValue: number[] = [];
  lightGaugeOptions: EChartsOption = this.chartGaugeOption(
    this.lightGraphValue
  );
  lightLineOptions: EChartsOption = this.chartLineOption(this.lightGraphValue);

  // Variáveis de temperatura
  // TODO: Adaptar variaveis de temperatura
  histTemp: boolean = false;
  tempGraphValue: number = 20;
  tempGaugeMergeOptions = {};
  tempLineMergeOptions = {};
  tempLinesData: number[] = [0];
  tempLinesValue: number[] = [];
  tempGaugeOptions: EChartsOption = this.chartGaugeOption(this.tempGraphValue);
  tempLineOptions: EChartsOption = this.chartLineOption(this.tempGraphValue);

  constructor() {}

  ngOnInit(): void {}

  toggleHistTemp() {
    this.histTemp = !this.histTemp;
  }

  toggleHistLight() {
    this.histLight = !this.histLight;
  }

  firulinha(baseValue: number) {
    // Firulinha para luminosidade
    let adaptedValue = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 2) == 0) {
      adaptedValue *= -1;
    }
    this.lightGraphValue = baseValue + adaptedValue;
    if (this.lightGraphValue < 0) {
      this.lightGraphValue = 0;
    }
    this.lightGaugeMergeOptions = this.chartGaugeOption(this.lightGraphValue);
    this.lightLineMergeOptions = this.chartLineOption(this.lightGraphValue);

    // Firulinha para temperatura
    adaptedValue = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 2) == 0) {
      adaptedValue *= -1;
    }
    this.tempGraphValue = baseValue + adaptedValue;
    if (this.tempGraphValue < 0) {
      this.tempGraphValue = 0;
    }
    this.tempGaugeMergeOptions = this.chartGaugeOption(this.tempGraphValue);
    this.tempLineMergeOptions = this.chartLineOption(this.tempGraphValue);
  }

  chartGaugeOption(value: number): EChartsOption {
    return {
      series: [
        {
          type: 'gauge',
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, '#fd666d'],
                [0.7, '#dddd60'],
                [1, '#50ff70'],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: 'auto',
            },
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: '#fff',
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 30,
            lineStyle: {
              color: '#fff',
              width: 4,
            },
          },
          axisLabel: {
            color: 'auto',
            distance: 40,
            fontSize: 20,
          },
          detail: {
            valueAnimation: true,
            formatter: `${value > 100 ? '100+' : value} lúmens`,
            color: 'auto',
            fontSize: '18px',
          },
          data: [
            {
              value: value,
            },
          ],
        },
      ],
    };
  }

  chartLineOption(newValue: number): EChartsOption {
    this.lightLinesData.push(
      this.lightLinesData[this.lightLinesData.length - 1] + 1
    );
    this.lightLinesValue.push(newValue);
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.lightLinesData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.lightLinesValue,
          type: 'line',
          areaStyle: {},
        },
      ],
    };
  }
}
