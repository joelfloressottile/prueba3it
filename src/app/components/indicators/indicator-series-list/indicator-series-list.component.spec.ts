import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorSeriesListComponent } from './indicator-series-list.component';

describe('IndicatorSeriesListComponent', () => {
  let component: IndicatorSeriesListComponent;
  let fixture: ComponentFixture<IndicatorSeriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorSeriesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorSeriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
