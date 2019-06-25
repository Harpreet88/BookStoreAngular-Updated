import { Component, OnInit } from '@angular/core';
import { Review } from '../beans/review';
import {ReviewService } from '../services/review.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'update-review',
    templateUrl: 'review.updatereview.html'
})
export class UpdateReviewComponent {

    constructor(private reviewService: ReviewService, private router: Router) { }
    review: any = {};

    updateReviewy(): any {
        this.reviewService.updateReview(this.review);
    }
}