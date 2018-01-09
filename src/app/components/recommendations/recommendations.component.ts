import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';
import { Result } from '../../models/SearchResult';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})

export class RecommendationsComponent implements OnInit {

  recommendations: Result[];

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit() {
    this.recommendationService.getRecommendationsObserver().subscribe(resultArr => {
      this.recommendations = resultArr;
    });
    this.recommendations = this.recommendationService.getRecommendationsArray();
  }


}
