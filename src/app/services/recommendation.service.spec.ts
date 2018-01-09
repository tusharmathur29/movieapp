import { TestBed, inject } from '@angular/core/testing';

import { RecommendationService } from './recommendation.service';
import { MockData as data } from '../../../test/data/MockData';
import { DataService } from './data.service';
import { MockDataService } from '../../../test/services/MockDataService';

describe('RecommendationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendationService,
        { provide: DataService, useClass: MockDataService }]
    });
  });

  beforeEach(inject([RecommendationService], (service: RecommendationService) => {
    service.recommendMovie(<any>data.results[0]);
    service.recommendMovie(<any>data.results[1]);
    service.recommendMovie(<any>data.results[2]);
    service.recommendMovie(<any>data.results[3]);
  }));

  it('should be created', inject([RecommendationService], (service: RecommendationService) => {
    expect(service).toBeTruthy();
  }));

  it('should maintain reverse recommendation order', inject([RecommendationService], (service: RecommendationService) => {
    const id = data.results[3].id;
    expect(service.recommendationOrder[0]).toBe(<any>id);
  }));

  it('should verify recommended movie', inject([RecommendationService], (service: RecommendationService) => {
    expect(service.isMovieRecommended(<any>data.results[1])).toBeTruthy();
    data.results[4].id = '123';
    expect(service.isMovieRecommended(<any>data.results[4])).toBeFalsy();
  }));

  it('should unrecommend movie', inject([RecommendationService], (service: RecommendationService) => {
    service.unrecommendMovie(<any>data.results[1]);
    expect(service.isMovieRecommended(<any>data.results[1])).toBeFalsy();
  }));

  it('should prepare array from object with reverse order maintained', inject([RecommendationService], (service: RecommendationService) => {
    const id = data.results[2].id;
    const array = service.getRecommendationsArray();
    const arrayId = array[1].id;
    expect(arrayId).toBe(<any>id);
  }));
});
