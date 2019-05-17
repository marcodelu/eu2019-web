import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {ChartsModule} from 'ng2-charts';
import {HttpService} from '../../core/service/http.service';
import {SharedModule} from '../../core/shared.module';
import {ChartMostActiveCountriesComponent} from './component/chart-most-active-countries/chart-most-active-countries.component';
import {ChartPerDaysComponent} from './component/chart-per-days/chart-per-days.component';
import {MainComponent} from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ChartMostActiveCountriesComponent,
    ChartPerDaysComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [
    HttpService
  ]
})
export class MainModule {
}
