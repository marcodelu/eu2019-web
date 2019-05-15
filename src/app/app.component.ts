import {AfterViewInit, Component} from '@angular/core';
import {SplashScreenService} from './core/service/splash-screen.service';

@Component({
  selector: 'app-root',
  template: `
    <div fxFill style="overflow: auto">
      <router-outlet #o="outlet"></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      position: relative;
      width: 100%;
      height: 100%;
    }
  `]
})
export class AppComponent implements AfterViewInit {

  constructor(private splashScreenService: SplashScreenService) {
  }

  ngAfterViewInit(): void {
    // this.splashScreenService.hide();
  }
}
