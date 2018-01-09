import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MoviesectionComponent } from '../moviesection/moviesection.component';
import { AppModule } from '../../app.module';
import { PaginationComponent } from '../pagination/pagination.component';
import { MoviecardComponent } from '../moviecard/moviecard.component';
import { RecommendationService } from '../../services/recommendation.service';
import { DataService } from '../../services/data.service';
import { MockDataService } from '../../../../test/services/MockDataService';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, MoviesectionComponent, PaginationComponent, MoviecardComponent],
      providers: [RecommendationService,
        { provide: DataService, useClass: MockDataService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
