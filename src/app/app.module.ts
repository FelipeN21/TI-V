import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './dependencies/material.module';
import { ArduinoComponent } from './components/arduino/arduino.component';
import { RedeComponent } from './components/rede/rede.component';
import { TempGraphComponent } from './components/rede/temp-graph/temp-graph.component';
import { LightGraphComponent } from './components/rede/light-graph/light-graph.component';
import { TempHistoryGraphComponent } from './components/rede/temp-history-graph/temp-history-graph.component';
import { LightHistoryGraphComponent } from './components/rede/light-history-graph/light-history-graph.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    ArduinoComponent,
    RedeComponent,
    TempGraphComponent,
    LightGraphComponent,
    TempHistoryGraphComponent,
    LightHistoryGraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
