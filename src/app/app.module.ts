import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './form-page/form-page.component';
import { OrderBlockComponent } from './order-block/order-block.component';
import { CustomerReviewBlockComponent } from './customer-review-block/customer-review-block.component';
import { FeedbackBlockComponent } from './feedback-block/feedback-block.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    OrderBlockComponent,
    CustomerReviewBlockComponent,
    FeedbackBlockComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
