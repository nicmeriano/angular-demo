import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';
import { ImportSettingsComponent } from 'src/app/components/import-settings/import-settings.component';
import { UserSettingsComponent } from 'src/app/components/user-settings/user-settings.component';
import { GeneralSettingsComponent } from 'src/app/components/general-settings/general-settings.component';

@NgModule({
  declarations: [SettingsPage, ImportSettingsComponent, UserSettingsComponent, GeneralSettingsComponent],
  imports: [CommonModule, SettingsRoutingModule]
})
export class SettingsModule {}
