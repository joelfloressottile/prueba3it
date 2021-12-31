import { Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Indicator } from 'src/app/models/indicator.model';

@Component({
  selector: 'app-indicator-modal',
  templateUrl: './indicator-modal.component.html',
  styleUrls: ['./indicator-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IndicatorModalComponent implements OnInit {
  @Input() indicatorData!: Indicator;

  constructor() { }

  ngOnInit(): void {

  }
}
