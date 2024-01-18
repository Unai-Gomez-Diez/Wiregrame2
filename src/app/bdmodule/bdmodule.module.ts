import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBDComponentComponent } from './widget-bdcomponent/widget-bdcomponent.component';



@NgModule({
  declarations: [WidgetBDComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetBDComponentComponent
  ]
})
export class BDModuleModule { }
