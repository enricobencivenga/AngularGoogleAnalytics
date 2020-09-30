import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { ShopPageComponent } from './pages/shop/shop-page.component';
import { GoogleAnalyticsCartService } from './shared/services/google-analytics-cart.service';
import { GoogleAnalyticsService } from './shared/services/google-analytics.service';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GoogleAnalyticsCartService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
