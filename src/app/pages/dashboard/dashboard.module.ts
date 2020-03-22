import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardPage, DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
