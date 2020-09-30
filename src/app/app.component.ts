import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private gas: GoogleAnalyticsService){  
    this.router.events.subscribe(event => {
       if(event instanceof NavigationEnd){
           this.gas.sendConfig(event);
        }
     }
  )}

}
