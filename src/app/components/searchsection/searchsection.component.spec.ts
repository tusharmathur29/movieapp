import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsectionComponent } from './searchsection.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MoviecardComponent } from '../moviecard/moviecard.component';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../../../test/services/MockDataService';
import { MockData as data } from '../../../../test/data/MockData';

describe('SearchsectionComponent', () => {
  let component: SearchsectionComponent;
  let fixture: ComponentFixture<SearchsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchsectionComponent, PaginationComponent, MoviecardComponent],
      providers: [{ provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call data service to search a movie', () => {
    component.searchMovie('abc');
    expect(component.searchResult).toBe(<any>data);
  });
});
