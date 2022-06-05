import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldDatatableComponent } from './world-datatable.component';

describe('WorldDatatableComponent', () => {
  let component: WorldDatatableComponent;
  let fixture: ComponentFixture<WorldDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
