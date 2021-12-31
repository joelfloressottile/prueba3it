import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndicatorsListComponent } from './components/indicators/indicators-list/indicators-list.component';
import { IndicatorComponent } from './components/indicators/indicator/indicator.component';
import { IndicatorModalComponent } from './components/indicators/indicator-modal/indicator-modal.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { IndicatorValuePipe } from './pipes/indicator-value.pipe';
import { TrustHtmlPipe } from './pipes/trust-html.pipe';
import { MomentPipe } from './pipes/moment.pipe';
import { IndicatorSingleComponent } from './components/views/indicator-single/indicator-single.component';
import { IndicatorSeriesListComponent } from './components/indicators/indicator-series-list/indicator-series-list.component';
import { SeriesChartComponent } from './components/indicators/series-chart/series-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    IndicatorsListComponent,
    IndicatorComponent,
    IndicatorModalComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IndicatorValuePipe,
    TrustHtmlPipe,
    MomentPipe,
    IndicatorSingleComponent,
    IndicatorSeriesListComponent,
    SeriesChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MomentPipe,
    IndicatorValuePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
