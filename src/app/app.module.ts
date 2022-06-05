import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgChartsModule } from 'ng2-charts';
import { HomeModule } from './home/home.module';
import { TotalsWidgetModule } from './shared/totals-widgets/totals-widgets.module';
import { LoadingIconModule } from './shared/loading-icon/loading-icon.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    NgChartsModule,
    HomeModule,
    TotalsWidgetModule,
    LoadingIconModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
