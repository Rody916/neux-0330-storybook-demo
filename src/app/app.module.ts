import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonDemoComponentComponent } from './button-demo-component/button-demo-component.component';
import { ProfileDemoComponentComponent } from './profile-demo-component/profile-demo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonDemoComponentComponent,
    ProfileDemoComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
