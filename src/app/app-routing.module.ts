import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WorkInProgressComponent} from './children/work-in-progress/work-in-progress.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './children/main/main.module#MainModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

const workInProgressRoutes: Routes = [
  {
    path: '**',
    component: WorkInProgressComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
