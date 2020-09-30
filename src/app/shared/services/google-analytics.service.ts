import { Injectable } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

declare let gtag: (...params: any[]) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public sendEvent(
    eventName: string,
    eventCategory: string,
    eventLabel: string = null,
    eventValue: number = null
  ) {
    gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: eventValue
    });
  }

  public sendConfig(event: NavigationEnd) {
    gtag('config', environment.googleTrackingId,
      {
        page_path: event.urlAfterRedirects,
        send_page_view: true
      });
  }

  public setCurrentUser(userId: string) {
    gtag('set',
      {
        user_id: userId
      });
  }
}
