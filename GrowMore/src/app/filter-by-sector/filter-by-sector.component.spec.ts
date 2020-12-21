import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySectorComponent } from './filter-by-sector.component';

describe('FilterBySectorComponent', () => {
  let component: FilterBySectorComponent;
  let fixture: ComponentFixture<FilterBySectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBySectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBySectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
