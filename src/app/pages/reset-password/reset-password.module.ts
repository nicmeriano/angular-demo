import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPage } from './reset-password.page';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';

@NgModule({
  declarations: [ResetPasswordPage, ResetPasswordComponent],
  imports: [CommonModule, ResetPasswordRoutingModule]
})
export class ResetPasswordModule {}
