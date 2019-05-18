import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../core/shared.module';
import {AboutComponent} from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule
  ],
  providers: []
})
export class AboutModule {
}
