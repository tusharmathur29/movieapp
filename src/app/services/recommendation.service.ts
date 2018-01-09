import { Injectable } from '@angular/core';
import { Result } from '../models/SearchResult';
import { Observable } from 'rxjs/Observable';
import { MovieDictionary } from '../models/MovieDictionary';
import { Subject } from 'rxjs/Subject';
import { DataService } from './data.service';
import { forEach } from '@angular/router/src/utils/collection';


@Injectable()
export class RecommendationService {

  recommendations: MovieDictionary = {};
  recommendationOrder: number[] = [];
  recommendatios$ = new Subject();
  isRecommended$ = new Subject();

  constructor(private dataService: DataService) {
    this.dataService.getSavedMovies().subscribe((searchResult) => {
      searchResult.results.forEach(movie => {
        this.recommendAndSaveMovie(movie, false);
      });
    });
  }

  recommendMovie(movie: Result) {
    this.recommendAndSaveMovie(movie, true);
  }

  recommendAndSaveMovie(movie: Result, saveToDb: boolean) {
    this.recommendations[movie.id] = movie;
    this.recommendationOrder.unshift(movie.id);
    this.recommendatios$.next(this.recommendations);
    this.isRecommended$.next();
    if (saveToDb) {
      this.dataService.saveRecommendedMovie(movie).subscribe(() => {
       // Do Nothing
      });
    }
  }

  unrecommendMovie(movie: Result) {
    delete this.recommendations[movie.id];
    const index = this.recommendationOrder.indexOf(movie.id);
    this.recommendationOrder.splice(index, 1);
    this.recommendatios$.next();
    this.isRecommended$.next();
    this.dataService.deleteSavedMovie(movie).subscribe(() => {
      // Do nothing
    });
  }

  toggleRecommendation(movie: Result): boolean {
    if (this.isMovieRecommended(movie)) {
      this.unrecommendMovie(movie);
      return false;
    } else {
      this.recommendMovie(movie);
      return true;
    }
  }

  isMovieRecommended(movie: Result) {
    return this.recommendations[movie.id] ? true : false;
  }

  checkRecommendation(movie: Result): Observable<boolean> {
    return this.isRecommended$.asObservable().map(() => {
      return this.isMovieRecommended(movie);
    });
  }

  getRecommendationsObserver(): Observable<Result[]> {
    return this.recommendatios$.asObservable().map(() => {
      return this.getRecommendationsArray();
    });
  }

  getRecommendationsArray() {
    const result: Result[] = [];
    for (let i = 0; i < this.recommendationOrder.length; i++) {
      result.push(this.recommendations[this.recommendationOrder[i]]);
    }
    return result;
  }


}
