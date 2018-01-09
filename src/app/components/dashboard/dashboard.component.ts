import { Component, OnInit } from '@angular/core';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  recommendedMovieId: number;

  recommendedSectionSubtitle: string;

  constructor(private recommendationService: RecommendationService) { }

  ngOnInit() {
    const recommendationsArr = this.recommendationService.getRecommendationsArray();
    if (recommendationsArr.length > 0) {
      this.recommendedMovieId = recommendationsArr[0].id;
      this.recommendedSectionSubtitle = recommendationsArr[0].title;
    }
    this.recommendationService.getRecommendationsObserver().subscribe(resultArr => {
      if (resultArr.length > 0) {
        this.recommendedMovieId = resultArr[0].id;
        this.recommendedSectionSubtitle = resultArr[0].title;
      } else {
        this.recommendedMovieId = void 0;
        this.recommendedSectionSubtitle = void 0;
      }
    });
  }

}
