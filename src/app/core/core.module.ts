import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PagesModule } from '../pages/pages.module';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [],
  exports: [CommonModule, ComponentsModule, PagesModule, AppRoutingModule, BrowserModule]
})
export class CoreModule {}
