import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonDemoComponentComponent } from './button-demo-component/button-demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
