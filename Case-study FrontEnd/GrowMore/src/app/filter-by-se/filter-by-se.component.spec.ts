import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBySEComponent } from './filter-by-se.component';

describe('FilterBySEComponent', () => {
  let component: FilterBySEComponent;
  let fixture: ComponentFixture<FilterBySEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBySEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBySEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
