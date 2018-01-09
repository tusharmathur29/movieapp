import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviecardComponent } from './moviecard.component';
import { RecommendationService } from '../../services/recommendation.service';
import { Result } from '../../models/SearchResult';
import { MockDataService } from '../../../../test/services/MockDataService';
import { MockData as data } from '../../../../test/data/MockData';
import { DataService } from '../../services/data.service';

describe('MoviecardComponent', () => {
  let component: MoviecardComponent;
  let fixture: ComponentFixture<MoviecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviecardComponent ],
      providers: [
          RecommendationService,
          {provide: DataService, useClass: MockDataService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviecardComponent);
    component = fixture.componentInstance;
    component.movie = <any>data.results[0];
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate correct ratings', () => {
    console.log(component.ratings);
    expect(component.ratings.length).toBe(4);
    expect(component.ratings[0]).toBe('full');
    expect(component.ratings[1]).toBe('full');
    expect(component.ratings[2]).toBe('full');
    expect(component.ratings[3]).toBe('half');
  });

  it('should taggle recommendation of the movie', () => {
    component.recommended = true;
    component.toggleRecommendation();
    expect(component.recommended).toBeFalsy();
  });
});
