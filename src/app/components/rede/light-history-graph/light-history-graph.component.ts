import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-light-history-graph',
  templateUrl: './light-history-graph.component.html',
  styleUrls: ['./light-history-graph.component.css'],
})
export class LightHistoryGraphComponent implements OnInit {
  @Input() mergeOptions = {};
  @Input() options: EChartsOption = {};

  ngOnInit(): void {}
}
