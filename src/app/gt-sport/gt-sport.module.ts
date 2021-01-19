import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GtSportComponent} from "./gt-sport.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [GtSportComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [GtSportComponent]
})
export class GtSportModule { }
