import { Component, OnInit } from '@angular/core';
import { Review } from '../beans/review';
import { ReviewService } from '../services/review.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'remove-review',
    templateUrl: 'review.removereview.html'
})

export class RemoveReviewComponent{
 constructor(private reviewService:ReviewService, private router: Router) { }
    review: any = {};

    removeCategory(): any {
        this.reviewService.removeReview(this.review);
    }
}