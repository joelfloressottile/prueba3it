import { Component, Input, OnInit } from '@angular/core';
import { IndicatorSerie } from 'src/app/models/indicator-serie.model';

@Component({
  selector: 'app-indicator-series-list',
  templateUrl: './indicator-series-list.component.html',
  styleUrls: ['./indicator-series-list.component.scss']
})
export class IndicatorSeriesListComponent implements OnInit {
  @Input() series: Array<IndicatorSerie> = []
  @Input() unit: string = '';
  
  constructor() { }

  ngOnInit(): void {

  }

}
