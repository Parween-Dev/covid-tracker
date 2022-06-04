import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsWidgetsComponent } from './totals-widgets.component';

describe('TotalsWidgetsComponent', () => {
  let component: TotalsWidgetsComponent;
  let fixture: ComponentFixture<TotalsWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsWidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
