import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabeceraComponentComponent } from './CoreModule/cabecera-component/cabecera-component.component';
import { WidgetTransferenciaComponentComponent } from './widget-transferencia-component/widget-transferencia-component.component';
import { WidgetEspacioComponentComponent } from './widget-espacio-component/widget-espacio-component.component';
import { WidgetBuzonesComponentComponent } from './widget-buzones-component/widget-buzones-component.component';
import { WidgetFTPComponentComponent } from './widget-ftpcomponent/widget-ftpcomponent.component';
import { WidgetBDComponentComponent } from './widget-bdcomponent/widget-bdcomponent.component';
import { WidgetFireWallComponentComponent } from './widget-fire-wall-component/widget-fire-wall-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponentComponent,
    WidgetTransferenciaComponentComponent,
    WidgetEspacioComponentComponent,
    WidgetBuzonesComponentComponent,
    WidgetFTPComponentComponent,
    WidgetBDComponentComponent,
    WidgetFireWallComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
