import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WorkInProgressComponent} from './children/work-in-progress/work-in-progress.component';
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
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
