import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from './google-analytics.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsCartService {

  constructor(private gas: GoogleAnalyticsService) { }

  public addToChart(productId) {
    this.gas.sendEvent('add_to_cart', 'cart', 'click', productId);
  }

  public removeFromChart(productId) {
    this.gas.sendEvent('remove_from_cart', 'cart', 'click', productId);
  }
}
