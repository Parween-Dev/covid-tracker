import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesContainerComponent } from './countries-container.component';

describe('CountriesContainerComponent', () => {
  let component: CountriesContainerComponent;
  let fixture: ComponentFixture<CountriesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
