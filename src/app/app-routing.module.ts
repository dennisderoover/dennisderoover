import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GtSportComponent } from "./gt-sport/gt-sport.component";
import { ChineesPoepenComponent } from "./games/chinees-poepen/chinees-poepen.component";

const routes: Routes = [
  { path: 'gt-sport', component: GtSportComponent },
  { path: 'chinees-poepen', component: ChineesPoepenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
