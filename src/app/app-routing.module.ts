import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ReviewPage } from './pages/review/review.page';
import { SettingsPage } from './pages/settings/settings.page';
import { LoginPage } from './pages/login/login.page';
import { PagesModule } from './pages/pages.module';
import { ImportComponent } from './components/import/import.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingsPage,
    children: [
      { path: 'import', component: ImportComponent },
      { path: 'user', component: UserSettingsComponent },
      { path: 'general', component: GeneralSettingsComponent }
    ]
  },
  { path: 'dashboard', component: DashboardPage },
  { path: 'review', component: ReviewPage },
  { path: 'settings', component: SettingsPage },
  { path: 'login', component: LoginPage },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule, PagesModule]
})
export class AppRoutingModule {}
