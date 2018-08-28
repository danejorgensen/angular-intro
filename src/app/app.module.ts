import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClickCounterComponent } from './components/click-counter/click-counter.component';
import { ClickCounterObservableComponent } from './components/click-counter-observable/click-counter-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickCounterComponent,
    ClickCounterObservableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
