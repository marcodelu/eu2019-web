import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorkInProgressComponent} from './children/work-in-progress/work-in-progress.component';
import {HttpService} from './core/service/http.service';
import {ResizeService} from './core/service/resize.service';
import {SharedModule} from './core/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkInProgressComponent
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
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
