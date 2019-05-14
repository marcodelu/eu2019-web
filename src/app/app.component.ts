import {Component, HostListener} from '@angular/core';
import {ResizeService} from './core/service/resize.service';

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
export class AppComponent {

  constructor(private resizeService: ResizeService) {
  }

  @HostListener('window:resize', ['$event.target.innerWidth', '$event.target.innerHeight'])
  onResize(width: number, height: number) {
    this.resizeService.resize = {width, height};
  }
}
