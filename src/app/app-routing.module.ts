import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermsComponent} from './children/terms/terms.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: './children/about/about.module#AboutModule'
  },
  {
    path: 'terms',
    component: TermsComponent
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
