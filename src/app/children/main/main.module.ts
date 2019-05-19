import {DecimalPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {ChartService} from '../../core/service/chart.service';
import {DataService} from '../../core/service/data.service';
import {HttpService} from '../../core/service/http.service';
import {SharedModule} from '../../core/shared.module';
import {ChartMapComponent} from './component/chart-map/chart-map.component';
import {ChartMostActiveLanguagesComponent} from './component/chart-most-active-countries/chart-most-active-languages.component';
import {ChartPerDaysComponent} from './component/chart-per-days/chart-per-days.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ChartMostActiveLanguagesComponent,
    ChartPerDaysComponent,
    ChartMapComponent,
    DashboardComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    ChartsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [
    HttpService,
    DataService,
    ChartService,
    DecimalPipe
  ]
})
export class MainModule {
}
