import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { SearchResult, Result } from '../models/SearchResult';

@Injectable()
export class DataService {

  apiDictionary: { [key: string]: (...val: string[]) => Observable<SearchResult> } = {
    'upcoming': this.getUpcomingMovies,
    'recommeded': this.getRecommendedMovies,
    'trending': this.getTrendingMovies
  };

  constructor(public http: Http) { }

  searchMovieByName(movieName: string, pageNumber: string): Observable<SearchResult> {
    let searchUrl = '/api/search/' + movieName;
    if (pageNumber) {
      searchUrl = searchUrl + '?page=' + pageNumber;
    }
    return this.http.get(searchUrl).map(res => res.json());
  }

  getUpcomingMovies(pageNumber: string): Observable<SearchResult> {
    const url = '/api/upcoming';
    return this.getDataByUrl(url, pageNumber);
  }

  getTrendingMovies(pageNumber: string): Observable<SearchResult> {
    const url = '/api/trending';
    return this.getDataByUrl(url, pageNumber);
  }

  getRecommendedMovies(pageNumber: string, movieId: string): Observable<SearchResult> {
    const url = '/api/recommendations/' + movieId;
    return this.getDataByUrl(url, pageNumber);
  }

  getSavedMovies(): Observable<SearchResult> {
    return this.getDataByUrl('/api/getSavedRecommendations', void 0);
  }

  saveRecommendedMovie(movie: Result) {
    return this.http.post('/api/recommendMovie', movie);
  }

  deleteSavedMovie(movie: Result) {
    return this.http.delete('/api/unrecommendMovie/' + movie.id);
  }

  getDataByUrl(apiUrl: string, pageNumber: string) {
    if (pageNumber) {
      apiUrl = apiUrl + '?page=' + pageNumber;
    }
    return this.http.get(apiUrl).map(res => res.json());
  }


}


