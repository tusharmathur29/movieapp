import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from '../../src/app/services/data.service';
import { MockData as searchResult } from '../data/MockData';

export class MockDataService {
  mockObservable$ = new BehaviorSubject({});
  apiDictionary: { [key: string]: (...val: string[]) => Observable<any> } = {
    'upcoming': this.getMockData,
    'recommeded': this.getMockData,
    'trending': this.getMockData,
  };

  constructor() {
    this.mockObservable$.next(searchResult);
  }

  searchMovieByName(movieName: string, pageNumber: string): Observable<any> {
    return this.mockObservable$.asObservable();
  }

  getSavedMovies(): Observable<any> {
    return this.mockObservable$.asObservable();
  }

  saveRecommendedMovie(any) {
    return this.mockObservable$.asObservable();
  }

  deleteSavedMovie(movie: any) {
    return this.mockObservable$.asObservable();
  }

  getMockData(pageNumber: string): Observable<any> {
    return this.mockObservable$.asObservable();
  }
}
