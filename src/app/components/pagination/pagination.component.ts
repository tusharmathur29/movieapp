import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number;

  @Input() totalPages: number;

  @Output() paginate = new EventEmitter<number>();

  currentGroupNum: number;

  totalGroupNum: number;

  linksObj: { [group: number]: number[] } = {};
  constructor() { }

  ngOnInit() {
    let linksArr = [];
    let groupNum = 1;
    /* Creating groups of 5 pages*/
    for (let i = 1; i <= this.totalPages; i++) {
      linksArr.push(i);
      if (i % 5 === 0.0) {
        this.linksObj[groupNum] = linksArr;
        groupNum++;
        linksArr = [];
      } else if (i === +this.totalPages) {
        this.linksObj[groupNum] = linksArr;
      }
    }
    this.totalGroupNum = groupNum;
    this.currentGroupNum = Math.ceil(this.currentPage / 5);
  }

  loadPage(pageNumber) {
    this.currentPage = pageNumber;
    this.currentGroupNum = Math.ceil(pageNumber / 5);
    this.paginate.emit(pageNumber);
  }

  loadNextGroup() {
    this.currentGroupNum++;
  }

  loadPreviousGroup() {
    this.currentGroupNum--;
  }

}
