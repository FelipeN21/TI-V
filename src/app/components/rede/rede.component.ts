import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-rede',
  templateUrl: './rede.component.html',
  styleUrls: ['./rede.component.css'],
})
export class RedeComponent implements OnInit {
  histTemp: boolean = false;
  histLight: boolean = false;
  graphValue: number = 82;
  gaugeMergeOptions = {};
  lineMergeOptions = {};
  interval = setInterval(() => {
    this.firulinha(this.graphValue);
  }, 500);
  linesData: number[] = [0];
  linesValue: number[] = [];
  gaugeOptions: EChartsOption = this.chartGaugeOption(this.graphValue);
  lineOptions: EChartsOption = this.chartGaugeOption(this.graphValue);

  constructor() {}

  ngOnInit(): void {}

  toggleHistTemp() {
    this.histTemp = !this.histTemp;
  }

  toggleHistLight() {
    this.histLight = !this.histLight;
  }

  firulinha(baseValue: number) {
    let adaptedValue = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 2) == 0) {
      adaptedValue *= -1;
    }
    this.graphValue = baseValue + adaptedValue;
    if (this.graphValue < 0) {
      this.graphValue = 0;
    }
    this.gaugeMergeOptions = this.chartGaugeOption(this.graphValue);
    this.lineMergeOptions = this.chartLineOption(this.graphValue);
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
    this.linesData.push(this.linesData[this.linesData.length - 1] + 1);
    this.linesValue.push(newValue);
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.linesData,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: this.linesValue,
          type: 'line',
          areaStyle: {},
        },
      ],
    };
  }
}
