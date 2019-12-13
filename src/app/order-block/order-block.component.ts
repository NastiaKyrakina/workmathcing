import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-block',
  templateUrl: './order-block.component.html',
  styleUrls: ['./order-block.component.css']
})
export class OrderBlockComponent implements OnInit {

  @Input() formGroup: FormGroup;
  isInputActive = false;

  constructor() { }

  ngOnInit() {
  }

  changeLabel() {
    this.isInputActive = !this.isInputActive;
  }
}
