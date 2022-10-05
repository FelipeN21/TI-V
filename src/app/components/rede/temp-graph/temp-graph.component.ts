import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';

@Component({
  selector: 'app-temp-graph',
  templateUrl: './temp-graph.component.html',
  styleUrls: ['./temp-graph.component.css'],
})
export class TempGraphComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [20, 55, 30, 40, 45, 55, 60, 65, 44, 22],
        type: 'line',
        areaStyle: {},
      },
    ],
  };
}
