import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePasswordRoutingModule } from './create-password-routing.module';
import { CreatePasswordComponent } from 'src/app/components/create-password/create-password.component';
import { CreatePasswordPage } from './create-password.page';

@NgModule({
  declarations: [CreatePasswordPage, CreatePasswordComponent],
  imports: [CommonModule, CreatePasswordRoutingModule]
})
export class CreatePasswordModule {}
