import {DecimalPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {ChartService} from '../../core/service/chart.service';
import {DataService} from '../../core/service/data.service';
import {HttpService} from '../../core/service/http.service';
import {SharedModule} from '../../core/shared.module';
import {ChartMostActiveLanguagesComponent} from './component/chart-most-active-languages/chart-most-active-languages.component';
import {ChartMostActivePartiesComponent} from './component/chart-most-active-parties/chart-most-active-parties.component';
import {ChartPartiesPerCountryComponent} from './component/chart-parties-per-country/chart-parties-per-country.component';
import {ChartPerDaysComponent} from './component/chart-per-days/chart-per-days.component';
import {ChartTweetsPerTopicComponent} from './component/chart-tweets-per-topic/chart-tweets-per-topic.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {MainComponent} from './main.component';
import { ChartPoliticalOrientationPerCountryComponent } from './component/chart-political-orientation-per-country/chart-political-orientation-per-country.component';

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
    DashboardComponent,
    ChartMostActiveLanguagesComponent,
    ChartPerDaysComponent,
    ChartTweetsPerTopicComponent,
    ChartPartiesPerCountryComponent,
    ChartMostActivePartiesComponent,
    ChartPoliticalOrientationPerCountryComponent
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
    MatCardModule
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
