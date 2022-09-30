import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-light-graph',
  templateUrl: './light-graph.component.html',
  styleUrls: ['./light-graph.component.css'],
})
export class LightGraphComponent implements OnInit {
  options: EChartsOption = {
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
          formatter: '{value} lúmens',
          color: 'auto',
          fontSize: '18px',
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
