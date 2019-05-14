import {Component} from '@angular/core';

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

  constructor() {
  }
}
