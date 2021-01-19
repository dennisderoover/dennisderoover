import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GtSportModule } from "./gt-sport/gt-sport.module";
import { HttpClientModule } from "@angular/common/http";
import { ChineesPoepenComponent } from './games/chinees-poepen/chinees-poepen.component';

@NgModule({
  declarations: [
    AppComponent,
    ChineesPoepenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GtSportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
