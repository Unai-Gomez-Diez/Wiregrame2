import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeguridadModuleModule } from './seguridad-module/seguridad-module.module';
import { WidgetTransferenciaComponentComponent } from './trafico-module/widget-transferencia-component/widget-transferencia-component.component';
import { TraficoModuleModule } from './trafico-module/trafico-module.module';
import { HDModuleModule } from './hdmodule/hdmodule.module';
import { FTPModuleModule } from './ftpmodule/ftpmodule.module';
import { EmailModuleModule } from './email-module/email-module.module';
import { BDModuleModule } from './bdmodule/bdmodule.module';
import { CoreModuleModule } from './core-module/core-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SeguridadModuleModule,
    TraficoModuleModule,
    HDModuleModule,
    FTPModuleModule,
    EmailModuleModule,
    BDModuleModule,
    CoreModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
