import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Indicator } from 'src/app/models/indicator.model';
import { ApiHelperService } from 'src/app/services/api-helper.service';

@Component({
  selector: 'app-indicator-single',
  templateUrl: './indicator-single.component.html',
  styleUrls: ['./indicator-single.component.scss']
})
export class IndicatorSingleComponent implements OnInit {
  routeIndicator!: string;
  loading: boolean = false;
  indicator: Indicator = new Indicator({});

  constructor(private route: ActivatedRoute, private apiHelper: ApiHelperService, private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras && navigation?.extras.state && navigation?.extras.state.title){
      this.indicator.name= navigation.extras.state.title;
    }
  }

  ngOnInit(): void {
    

    this.route.params.subscribe((params: Params) => {
      this.routeIndicator = params.code;
    });
    this.fetchApi();
  }

  fetchApi(){
    this.loading = true;
    this.apiHelper.getIndicator(this.routeIndicator)
    .subscribe(
      data => {
        this.indicator = new Indicator(data);
        this.loading = false;
      }
    )
  }

}
