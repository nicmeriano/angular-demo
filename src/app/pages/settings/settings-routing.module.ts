import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';
import { ImportComponent } from 'src/app/components/import/import.component';
import { UserSettingsComponent } from 'src/app/components/user-settings/user-settings.component';
import { GeneralSettingsComponent } from 'src/app/components/general-settings/general-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children: [
      { path: 'import', component: ImportComponent },
      { path: 'user', component: UserSettingsComponent },
      { path: 'general', component: GeneralSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
