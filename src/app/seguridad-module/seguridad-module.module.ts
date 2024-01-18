import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetFireWallComponentComponent } from './widget-fire-wall-component/widget-fire-wall-component.component';



@NgModule({
  declarations: [WidgetFireWallComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WidgetFireWallComponentComponent
  ]
})
export class SeguridadModuleModule { }
