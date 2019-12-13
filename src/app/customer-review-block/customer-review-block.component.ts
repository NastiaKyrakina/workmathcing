import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-review-block',
  templateUrl: './customer-review-block.component.html',
  styleUrls: ['./customer-review-block.component.css']
})
export class CustomerReviewBlockComponent implements OnInit {

  @Input() formGroup: FormGroup;

  starsArray: number[] = [1, 2, 3, 4, 5];
  starsCount = 0;
  constructor() { }

  ngOnInit() {
  }

  setReview(star: number) {
    this.starsCount = star;
  }
}
