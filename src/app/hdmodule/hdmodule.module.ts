import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetEspacioComponentComponent } from './widget-espacio-component/widget-espacio-component.component';



@NgModule({
  declarations: [WidgetEspacioComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetEspacioComponentComponent
  ]
})
export class HDModuleModule { }
