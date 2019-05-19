import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BaseType, select, Selection} from 'd3-selection';

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class ChartMapComponent implements OnInit {

  svg: Selection<BaseType, {}, HTMLElement, any>;

  constructor() {
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.svg = select('#europe-map');

    this.svg.select('#state-' + 'gb').classed('level-' + 1, true);
    this.svg.select('#state-' + 'it').classed('level-' + 2, true);
    this.svg.select('#state-' + 'es').classed('level-' + 3, true);
    this.svg.select('#state-' + 'de').classed('level-' + 4, true);

  }
}
