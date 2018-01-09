import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.totalPages = 27;
    component.currentPage = 13;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should divide totalPages in correct groups', () => {
    const keys = Object.keys(component.linksObj).length;
    // No of groups of 5 links each, should be 6
    expect(keys).toBe(6);
    // last group shoud have 2 links
    expect(component.linksObj[6].length).toBe(2);
  });

  it('it should calculate correct current group number', () => {
    // 13 should fall in 3rd group
    expect(component.currentGroupNum).toBe(3);
  });
});
