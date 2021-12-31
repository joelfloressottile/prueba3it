import { Component, OnInit } from '@angular/core';
import { ApiHelperService } from 'src/app/services/api-helper.service'
import { Indicator } from 'src/app/models/indicator.model'

@Component({
  selector: 'app-indicators-list',
  templateUrl: './indicators-list.component.html',
  styleUrls: ['./indicators-list.component.scss'],
})
export class IndicatorsListComponent implements OnInit {
  indicatorsList: Array<Indicator> = [];
  indicators: Array<Indicator> = [];
  loading: Boolean = false;

  constructor(private apiHelper: ApiHelperService) { }

  ngOnInit(): void {
   this.fetchApi();
  }

  fetchApi(){
    this.loading = true;
    this.apiHelper.getIndicators()
    .subscribe(
      data => {
        let res = Object.keys(data);
        res.forEach(r => {
          if(r != 'version' && r != 'autor' && r != 'fecha'){
            this.indicators.push(data[r]);
          }
        })
        this.loading = false;
      }
    )
  }
  

}
