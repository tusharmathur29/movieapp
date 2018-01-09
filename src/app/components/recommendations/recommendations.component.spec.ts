import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendationsComponent } from './recommendations.component';
import { SearchsectionComponent } from '../searchsection/searchsection.component';
import { MoviesectionComponent } from '../moviesection/moviesection.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { MoviecardComponent } from '../moviecard/moviecard.component';
import { RecommendationService } from '../../services/recommendation.service';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../../../test/services/MockDataService';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationsComponent, SearchsectionComponent, MoviesectionComponent, PaginationComponent, MoviecardComponent],
      providers: [RecommendationService, { provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
