import {Injectable} from '@angular/core';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class ResizeService {
  private readonly resizeSubject = new BehaviorSubject<ScreenSize>({width: window.innerWidth, height: window.innerHeight});
  public readonly resizeObservable$ = this.resizeSubject.asObservable();
  private mq: string;
  private media$: Observable<MediaChange[]>;

  constructor(private observableMedia: MediaObserver) {
    this.media$ = observableMedia.asObservable();
    // this.media$.subscribe((changes: MediaChange) => this.mq = changes.mqAlias);
  }

  // get media() {
  // return this.media$.pipe(
  //   map((mq: MediaChange) => mq.mqAlias)
  // );
  // }

  set resize(value: ScreenSize) {
    console.log('next', value);
    this.resizeSubject.next(value);
  }

  get resizeObservable() {
    return this.resizeObservable$;
  }

  get xs(): boolean {
    return this.mq === 'xs';
  }

  get gt_xs(): boolean {
    return this.mq !== 'xs';
  }

  get sm(): boolean {
    return this.mq === 'sm';
  }

  get gt_sm(): boolean {
    return this.mq !== 'xs' && this.mq !== 'sm';
  }

  get lt_sm(): boolean {
    return this.mq === 'xs';
  }

  get md(): boolean {
    return this.mq === 'md';
  }

  get gt_md(): boolean {
    return this.mq === 'lg' || this.mq === 'xl';
  }

  get lt_md(): boolean {
    return this.mq === 'xs' || this.mq === 'sm';
  }

  get lg(): boolean {
    return this.mq === 'lg';
  }

  get gt_lg(): boolean {
    return this.mq === 'xl';
  }

  get lt_lg(): boolean {
    return this.mq !== 'lg' && this.mq !== 'xl';
  }

  get xl(): boolean {
    return this.mq === 'xl';
  }

  get lt_xl(): boolean {
    return this.mq !== 'xl';
  }

  isActive(mq: string): boolean {
    return this.observableMedia.isActive(mq);
  }
}

export interface ScreenSize {
  width: number;
  height: number;
}
