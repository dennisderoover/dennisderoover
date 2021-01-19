import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GtSportComponent } from "./gt-sport/gt-sport.component";

const routes: Routes = [
  { path: 'gt-sport', component: GtSportComponent },
  { path: 'gt-sport', component: GtSportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
