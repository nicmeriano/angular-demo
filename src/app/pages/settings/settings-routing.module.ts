import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { ImportSettingsComponent } from 'src/app/components/import-settings/import-settings.component';
import { UserSettingsComponent } from 'src/app/components/user-settings/user-settings.component';
import { GeneralSettingsComponent } from 'src/app/components/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'import',
    loadChildren: () => import('./import/import-settings.module').then(m => m.ImportSettingsModule)
  },
  { path: 'user', component: UserSettingsComponent },
  { path: 'general', component: GeneralSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
