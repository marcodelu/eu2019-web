import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TermsComponent} from './children/terms/terms.component';
import {WorkInProgressComponent} from './children/work-in-progress/work-in-progress.component';
import {HttpService} from './core/service/http.service';
import {SplashScreenService} from './core/service/splash-screen.service';
import {SharedModule} from './core/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkInProgressComponent,
    TermsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    HttpService,
    SplashScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
