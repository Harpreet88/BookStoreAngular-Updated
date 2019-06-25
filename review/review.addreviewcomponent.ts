import { Component, OnInit } from '@angular/core';
import { Review } from '../beans/review';
import { ReviewService } from '../services/review.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'add-review',
    templateUrl: 'review.addreview.html'
})
export class AddReviewComponent {

    constructor(private reviewService: ReviewService, private router: Router) { }
    review: any = {};

    addReview(): any {
        this.reviewService.addreview(this.review);
    }
}