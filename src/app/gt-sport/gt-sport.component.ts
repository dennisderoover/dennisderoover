import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProfileModel, StatsModel } from "./model/gt-sport.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gt-sport',
  templateUrl: './gt-sport.component.html',
  styleUrls: ['./gt-sport.component.scss']
})
export class GtSportComponent {

  private api_url = 'http://localhost:4200/api/gt7sp/profile/?user_no='

  public formGroup: FormGroup;
  public playerProfile: ProfileModel;
  public playerStats: StatsModel;
  public showStats = false;
  public isLoading = false;

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      playerId: ''
    })
  }

  public submit(form) {
    this.formGroup.reset();
    this.playerProfile = null;
    this.playerStats = null;
    this.fetchData(form.playerId);
  }

  public fetchData(playerId: number) {
    this.isLoading = true;
    this.http.post(this.api_url + playerId + '&job=1', null).subscribe((profile: ProfileModel) => {
      this.playerProfile = profile;
      this.http.post(this.api_url + playerId + '&job=3', null).subscribe((stats: StatsModel) => {
        this.playerStats = stats;
        this.isLoading = false;
        this.showStats = true;
      });
    })
  }
}
