import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Indicator } from 'src/app/models/indicator.model';
import { IndicatorModalComponent } from 'src/app/components/indicators/indicator-modal/indicator-modal.component';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  @Input() indicatorData!: any;
  @Input() last!: boolean;
  public data!: Indicator
  

  constructor() { }

  ngOnInit(): void {
    this.data = new Indicator(this.indicatorData);
  }

}
