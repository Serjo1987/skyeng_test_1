import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as Components from './components/_index';

@NgModule({
  declarations: [
    AppComponent,
    Components.TabsComponent,
    Components.TabTitleComponent,
    Components.TabContentComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
