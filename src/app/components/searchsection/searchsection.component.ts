import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SearchResult, Result } from '../../models/SearchResult';

@Component({
  selector: 'app-searchsection',
  templateUrl: './searchsection.component.html',
  styleUrls: ['./searchsection.component.css']
})
export class SearchsectionComponent implements OnInit {
  @ViewChild('scrollPanel', { read: ElementRef }) panel: ElementRef;

  searchResult: SearchResult;
  movieResults: Result[] = [];
  inProgress = false;
  searchedMovieName: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.searchResult = null;
  }

  searchMovie(movieName: string) {
    this.searchedMovieName = movieName;
    this.navigateToPage('1');
    return false;
  }

  navigateToPage(pageNumber) {
    this.panel.nativeElement.scrollTop = 0;
    this.inProgress = true;
    this.dataService.searchMovieByName(this.searchedMovieName, pageNumber).subscribe((searchResult) => {
      this.searchResult = searchResult;
      this.movieResults = this.searchResult.results;
      this.inProgress = false;
    });
  }
}
