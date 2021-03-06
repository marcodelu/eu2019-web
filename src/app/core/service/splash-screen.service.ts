/* tslint:disable:variable-name */
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';
import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, take} from 'rxjs/operators';

@Injectable()
export class SplashScreenService {
  splashScreenEl: any;
  player: AnimationPlayer;

  constructor(private _animationBuilder: AnimationBuilder,
              @Inject(DOCUMENT) private _document: any,
              private _router: Router) {
    this._init();
  }

  show(): void {
    this.player =
      this._animationBuilder
        .build([
          style({
            opacity: '0',
            zIndex: '99999'
          }),
          animate('400ms ease', style({opacity: '1'}))
        ]).create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  hide(): void {
    this.player =
      this._animationBuilder
        .build([
          style({opacity: '1'}),
          animate('400ms ease', style({
            opacity: '0',
            zIndex: '-10'
          }))
        ]).create(this.splashScreenEl);

    setTimeout(() => {
      this.player.play();
    }, 0);
  }

  private _init(): void {
    // Get the splash screen element
    this.splashScreenEl = this._document.body.querySelector('#splash-screen');

    // If the splash screen element exists...
    if (this.splashScreenEl) {
      // Hide it on the first NavigationEnd event
      this._router.events
        .pipe(
          filter((event => event instanceof NavigationEnd)),
          take(1)
        )
        .subscribe(() => {
          setTimeout(() => {
            this.hide();
          }, 1000);
        });
    }
  }
}
