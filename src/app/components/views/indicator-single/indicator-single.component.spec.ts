import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorSingleComponent } from './indicator-single.component';

describe('IndicatorSingleComponent', () => {
  let component: IndicatorSingleComponent;
  let fixture: ComponentFixture<IndicatorSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicatorSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
