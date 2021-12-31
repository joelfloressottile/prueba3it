import { Component, Input, OnInit } from '@angular/core';
import { IndicatorSerie } from 'src/app/models/indicator-serie.model';
import { Chart, registerables } from 'chart.js';
import { MomentPipe } from 'src/app/pipes/moment.pipe';
import { IndicatorValuePipe } from 'src/app/pipes/indicator-value.pipe';
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-series-chart',
  templateUrl: './series-chart.component.html',
  styleUrls: ['./series-chart.component.scss']
})
export class SeriesChartComponent implements OnInit {
  @Input() series: Array<IndicatorSerie> = []
  @Input() indicatorUnit: string = '';
  dataValues:Array<number>=[];
  dataTexts:Array<string>=[];


  constructor(private momentPipe: MomentPipe, private indicatorPipe:IndicatorValuePipe) { 
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  ngOnInit(): void {
    this.dataValues = this.series.map(s=>s.value);
    this.dataTexts = this.series.map(s=>this.indicatorPipe.transform(s.value, 'valueOutput', this.indicatorUnit));
    let labels = this.series.map(s=>this.momentPipe.transform(s.date));

    var _this = this; 

    const seriesChart = new Chart('seriesChart', {
      type: 'line',
      data: {
          labels: labels,
          datasets: [{
              data: this.dataValues,
              backgroundColor: '#88E0EF33',
              borderColor: '#88E0EF',
              pointRadius: 4,
              pointBackgroundColor: '#FF5151',
              pointBorderColor: '#FF5151',
              borderWidth: 1,
              fill:true,
              tension: 0.5,
          }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: {
            ticks:{
              padding: 20,
              color: '#23252899',
            },
            grid:{
              drawBorder: false,
              color: '',
            },
          },
          yAxes:{
            ticks:{
              padding: 30,
              color: '#23252899',
            },
            grid:{
              color: '#23252815',
              drawBorder: false,
            },
          }
      },
        plugins: {
          legend: {
              display: false,
              labels: {
                  font: {
                      family: 'Roboto Condensed',
                      size: 14
                  }
              }
          },
          tooltip:{
            displayColors: false,
            callbacks: {
              label: function(tooltipItem:any) { 
                return _this.indicatorPipe.transform(tooltipItem.formattedValue, 'valueOutput', _this.indicatorUnit);
              }
            }
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: function(value) {
              return _this.indicatorPipe.transform(value, 'valueOutput', _this.indicatorUnit);
            },
            font: {
              weight: 'bold'
            }
          }
        },

      },
    });
  }

  ngAfterViewInit(){
    
  }
}
