import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportSettingsPage } from './import-settings.page';

const routes: Routes = [
  {
    path: '',
    component: ImportSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportSettingsRoutingModule {}
