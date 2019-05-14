import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../core/shared.module';
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
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class MainModule {
}
