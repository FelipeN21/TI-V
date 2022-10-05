import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-light-graph',
  templateUrl: './light-graph.component.html',
  styleUrls: ['./light-graph.component.css'],
})
export class LightGraphComponent implements OnInit {
  @Input() mergeOptions = {};
  @Input() options: EChartsOption = {};

  ngOnInit(): void {}
}
