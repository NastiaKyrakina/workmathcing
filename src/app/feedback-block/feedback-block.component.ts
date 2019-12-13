import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-feedback-block',
  templateUrl: './feedback-block.component.html',
  styleUrls: ['./feedback-block.component.css']
})
export class FeedbackBlockComponent implements OnInit {

  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
