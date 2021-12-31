import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './components/views/home/home.component'
import { IndicatorSingleComponent } from './components/views/indicator-single/indicator-single.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'indicador/:code',
    component: IndicatorSingleComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
