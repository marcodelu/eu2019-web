import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: './children/about/about.module#AboutModule'
  },
  {
    path: '',
    loadChildren: './children/main/main.module#MainModule'
  },
  // {
  //   path: '',
  //   component: WorkInProgressComponent
  // },
  {
    path: '**',
    redirectTo: ''
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
