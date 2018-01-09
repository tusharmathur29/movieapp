import { Component, Input, OnInit } from '@angular/core';
import { Result } from '../../models/SearchResult';
import { forEach } from '@angular/router/src/utils/collection';
import { RecommendationService } from '../../services/recommendation.service';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.css']
})
export class MoviecardComponent implements OnInit {

  @Input() movie: Result;

  ratings: string[] = [];

  recommended: boolean;

  constructor(private recommendationService: RecommendationService) {
    this.recommended = false;
  }

  ngOnInit() {
    if (!this.movie.overview) {
      this.movie.overview = 'Description Not Available';
    }
    if (this.movie.overview.length > 175) {
      let descPreview = this.movie.overview.substr(0, 170);
      descPreview = descPreview + '...';
      this.movie.overview_preview = descPreview;
    } else {
      this.movie.overview_preview = this.movie.overview;
    }
    this.calculateRating();
    if (this.recommendationService.isMovieRecommended(this.movie)) {
      this.recommended = true;
    }
    this.recommendationService.checkRecommendation(this.movie).subscribe(isRecommended => {
      this.recommended = isRecommended;
    });

  }


  calculateRating() {
    let rating = this.movie.vote_average;
    rating = 5 * (rating / 10);
    const absRating = Math.floor(rating);
    const decimals = rating - absRating;
    for (let i = 0; i < absRating; i++) {
      this.ratings.push('full');
    }
    if (decimals > 0.75) {
      this.ratings.push('full');
    }
    if (decimals >= 0.25 && decimals <= 0.75) {
      this.ratings.push('half');
    }
  }

  toggleRecommendation() {
    this.recommended = this.recommendationService.toggleRecommendation(this.movie);
  }
}
