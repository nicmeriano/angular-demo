import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPage } from './dashboard/dashboard.page';
import { ReviewPage } from './review/review.page';
import { SettingsPage } from './settings/settings.page';
import { LoginPage } from './login/login.page';



@NgModule({
  declarations: [DashboardPage, ReviewPage, SettingsPage, LoginPage],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
