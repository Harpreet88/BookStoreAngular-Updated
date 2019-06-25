import { Component, OnInit } from '@angular/core';
import { Review } from '../beans/review';
import { ReviewService } from '../services/review.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'get-review',
    templateUrl: 'review.getreview.html'
})

export class GetReviewComponent{
 constructor(private reviewService: ReviewService, private router: Router) { }
    review: any = {};

    getCategory(): any {
        this.reviewService.getReview(this.review);
    }
}