import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsDatatableComponent } from './totals-datatable.component';

describe('TotalsDatatableComponent', () => {
  let component: TotalsDatatableComponent;
  let fixture: ComponentFixture<TotalsDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalsDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
