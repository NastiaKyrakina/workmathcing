import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewBlockComponent } from './customer-review-block.component';

describe('FeedbackBlockComponent', () => {
  let component: CustomerReviewBlockComponent;
  let fixture: ComponentFixture<CustomerReviewBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReviewBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReviewBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
