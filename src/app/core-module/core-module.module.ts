import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponentComponent } from './cabecera-component/cabecera-component.component';



@NgModule({
  declarations: [CabeceraComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [CabeceraComponentComponent]
})
export class CoreModuleModule { }
