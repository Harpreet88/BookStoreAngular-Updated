import { Component, OnInit } from '@angular/core';
import { Review } from '../beans/review';
import { ReviewService } from '../services/review.services';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'getall-review',
    templateUrl: 'review.getallreviewServices.html'
})

export class GetAllReviewComponent{
 constructor(private reviewService: ReviewService, private router: Router) { }
    review: any = {};

    getAllReview(): any {
        this.reviewService.getAllReview();
    }
}