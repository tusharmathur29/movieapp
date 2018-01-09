import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesectionComponent } from './moviesection.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MoviecardComponent } from '../moviecard/moviecard.component';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../../../test/services/MockDataService';
import { MockData as data } from '../../../../test/data/MockData';

describe('MoviesectionComponent', () => {
  let component: MoviesectionComponent;
  let fixture: ComponentFixture<MoviesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesectionComponent, PaginationComponent, MoviecardComponent],
      providers: [{ provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get data on init when target is defined', () => {
    component.target = 'trending';
    component.ngOnInit();
    expect(component.currentPage).toBe(<any>data.page);
    expect(component.movieResults[0]).toBe(<any>data.results[0]);
    expect(component.totalPages).toBe(<any>data.total_pages);
  });

  it('should get data for target', () => {
    component.target = 'upcoming';
    component.getDataForTarget(null, '1');
    expect(component.currentPage).toBe(<any>data.page);
    expect(component.movieResults[0]).toBe(<any>data.results[0]);
    expect(component.totalPages).toBe(<any>data.total_pages);
  });

  it('should not call service for parameter based section', () => {
    component.target = 'upcoming';
    component.parameterBasedSection = true;
    component.ngOnInit();
    expect(component.currentPage).toBeUndefined();
    expect(component.movieResults).toBeUndefined();
    expect(component.totalPages).toBeUndefined();
  });
});
