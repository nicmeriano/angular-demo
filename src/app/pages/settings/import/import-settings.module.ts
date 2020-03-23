import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportSettingsComponent } from 'src/app/components/import-settings/import-settings.component';
import { ImportSettingsPage } from './import-settings.page';
import { ImportSettingsRoutingModule } from './import-settings-routing.module';



@NgModule({
  declarations: [ImportSettingsComponent, ImportSettingsPage],
  imports: [
    CommonModule,
    ImportSettingsRoutingModule
  ],
  exports: [

  ]
})
export class ImportSettingsModule { }
