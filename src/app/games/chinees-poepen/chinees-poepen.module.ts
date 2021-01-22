import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ChineesPoepenComponent} from "./chinees-poepen.component";

@NgModule({
  declarations: [ChineesPoepenComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [ChineesPoepenComponent]
})
export class ChineesPoepenModule { }
