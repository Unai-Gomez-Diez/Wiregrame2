import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetTransferenciaComponentComponent } from './widget-transferencia-component/widget-transferencia-component.component';



@NgModule({
  declarations: [WidgetTransferenciaComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetTransferenciaComponentComponent
  ]
})
export class TraficoModuleModule { }
