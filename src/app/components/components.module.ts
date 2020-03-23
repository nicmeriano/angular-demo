import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, ReviewComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, LayoutComponent, ReviewComponent]
})
export class ComponentsModule {}
