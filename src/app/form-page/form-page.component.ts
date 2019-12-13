import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  tabs: Array<{title: string; id: string; isActive: boolean;}> = [
    {
    title: 'Your order',
    id: 'order-tab',
    isActive: false,
    },
    {
      title: 'Your Feedback',
      id: 'feedback-tab',
      isActive: false,
    },
    {
      title: 'Get Your Benefit',
      id: 'free-tab',
      isActive: false,
    },
    ];
  activeTab = 'order-tab';

  mainForm: FormGroup;

  constructor(private fb: FormBuilder,) { }
  ngOnInit() {
    this.createForm();
    this.tabs[0].isActive = true;
  }

  changeTab(index: number): void {
    this.activeTab = this.tabs[index].id;
  }

  nextTab(): void {
    // this.activeTab = this.tabs[index].id;
  }

  createForm(): void {
    this.mainForm = this.fb.group({
      orderId: ['', [Validators.required, Validators.pattern(/^\w\d{2}-?\d{7}-?\d{7}$/)]],
      termOfUse: ['', [Validators.required]],
      review: [null, [Validators.required]],
      feedback: ['', ],
      reviewScreen: ['', ],
      customerName: ['', [Validators.required]],
      customerEmail: ['', [Validators.required, Validators.email]],
    });
  }
}
