import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent, ReviewComponent, SettingsComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, LayoutComponent, ReviewComponent, SettingsComponent]
})
export class ComponentsModule {}
