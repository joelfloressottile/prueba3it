import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba 3it';

  constructor(private router: Router){
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        $('.modal').modal('hide');
      }
    });
  }
}
