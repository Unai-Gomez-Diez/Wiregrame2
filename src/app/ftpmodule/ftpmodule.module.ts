import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetFTPComponentComponent } from './widget-ftpcomponent/widget-ftpcomponent.component';



@NgModule({
  declarations: [WidgetFTPComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetFTPComponentComponent
  ]
})
export class FTPModuleModule { }
