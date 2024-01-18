import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBuzonesComponentComponent } from './widget-buzones-component/widget-buzones-component.component';



@NgModule({
  declarations: [WidgetBuzonesComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetBuzonesComponentComponent
  ]
})
export class EmailModuleModule { }
