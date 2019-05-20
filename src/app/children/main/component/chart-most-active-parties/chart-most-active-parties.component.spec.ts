import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMostActivePartiesComponent } from './chart-most-active-parties.component';

describe('ChartMostActivePartiesComponent', () => {
  let component: ChartMostActivePartiesComponent;
  let fixture: ComponentFixture<ChartMostActivePartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartMostActivePartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMostActivePartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
