import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewPage } from './review.page';

@NgModule({
  declarations: [ReviewPage],
  imports: [CommonModule, ReviewRoutingModule]
})
export class ReviewModule {}
