import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { ReviewComponent } from './review/review.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ImportComponent } from './import/import.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { GeneralSettingsComponent } from './general-settings/general-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ReviewComponent,
    SettingsComponent,
    LoginComponent,
    ImportComponent,
    UserSettingsComponent,
    GeneralSettingsComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    ReviewComponent,
    SettingsComponent,
    LoginComponent,
    ImportComponent,
    UserSettingsComponent,
    GeneralSettingsComponent]

})
export class ComponentsModule {}
