import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-light-graph',
  templateUrl: './light-graph.component.html',
  styleUrls: ['./light-graph.component.css'],
})
export class LightGraphComponent implements OnInit {
  gaugeGraphValue: number = 82;
  interval = setInterval(() => {
    this.firulinha(this.gaugeGraphValue);
  }, 500);
  mergeOptions = {};

  options: EChartsOption = this.chartOption(this.gaugeGraphValue);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  firulinha(baseValue: number) {
    let adaptedValue = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 2) == 0) {
      adaptedValue *= -1;
    }
    this.gaugeGraphValue = baseValue + adaptedValue;
    if (this.gaugeGraphValue < 0) {
      this.gaugeGraphValue = 0;
    }
    this.mergeOptions = this.chartOption(this.gaugeGraphValue);
  }

  chartOption(value: number): EChartsOption {
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
}
