import {AfterViewInit, Component, HostListener} from '@angular/core';
import {ResizeService} from './core/service/resize.service';
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

  constructor(private resizeService: ResizeService,
              private splashScreenService: SplashScreenService) {
  }

  ngAfterViewInit(): void {
    // this.splashScreenService.hide();
  }

  @HostListener('window:resize', ['$event.target.innerWidth', '$event.target.innerHeight'])
  onResize(width: number, height: number) {
    this.resizeService.resize = {width, height};
  }
}
