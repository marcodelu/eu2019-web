import {AfterViewInit, Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
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

  constructor(private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private splashScreenService: SplashScreenService) {

    iconRegistry.addSvgIcon('twitter', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/twitter-icon.svg'));
  }

  ngAfterViewInit(): void {
    // this.splashScreenService.hide();
  }
}
