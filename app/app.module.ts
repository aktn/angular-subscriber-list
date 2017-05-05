import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubscriberAppModule } from './subscriber-app/subscriber-app.module';

@NgModule({
  imports: [
    BrowserModule,
    SubscriberAppModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
