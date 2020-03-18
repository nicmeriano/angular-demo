import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ReviewPage } from './pages/review/review.page';
import { SettingsPage } from './pages/settings/settings.page';
import { PagesModule } from './pages/pages.module';
import { ROUTES } from './constants/routes';

const routes: Routes = [
  { path: ROUTES.DASHBOARD, component: DashboardPage },
  { path: ROUTES.REVIEW, component: ReviewPage },
  { path: ROUTES.SETTINGS, component: SettingsPage },
  { path: '', pathMatch: 'full', redirectTo: ROUTES.DASHBOARD },
  { path: '**', redirectTo: ROUTES.DASHBOARD }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule, PagesModule]
})
export class AppRoutingModule {}
