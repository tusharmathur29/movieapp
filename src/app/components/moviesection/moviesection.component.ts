import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SearchResult, Result } from '../../models/SearchResult';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-moviesection',
  templateUrl: './moviesection.component.html',
  styleUrls: ['./moviesection.component.css']
})
export class MoviesectionComponent implements OnInit {

  @ViewChild('scrollPanel', { read: ElementRef }) panel: ElementRef;

  @Input() title: string;

  @Input() subtitle: string;

  @Input() movieResults: Result[];

  @Input() target: string;

  _parameter: string;

  parameterBasedSection = false;

  @Input() set parameter(value: string) {
    this.parameterBasedSection = true;
    if (value) {
      this._parameter = value;
      this.getDataForTarget(this._parameter, '1');
    } else {
      this.movieResults = null;
      this._parameter = null;
    }
  }

  inProgress = false;

  totalPages: number;

  currentPage: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    if (this.target && !this.parameterBasedSection) {
      this.getDataForTarget(void (0), '1');
    }
  }

  navigateToPage(pageNumber: string) {
    this.getDataForTarget(this.parameter, pageNumber);
  }

  getDataForTarget(parameter: string, pageNumber: string) {
    this.panel.nativeElement.scrollTop = 0;
    this.inProgress = true;
    const targetFunction = this.dataService.apiDictionary[this.target];
    targetFunction.call(this.dataService, pageNumber, parameter).subscribe((searchResult) => {
      this.movieResults = searchResult.results;
      this.totalPages = searchResult.total_pages;
      this.currentPage = searchResult.page;
      this.inProgress = false;
    });
  }

}
