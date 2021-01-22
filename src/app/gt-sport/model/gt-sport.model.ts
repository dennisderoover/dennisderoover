export interface GtSportStats {
  driver_point: number;
  manner_point: number;
  comment: string;
  driver_class: number;
  driver_photo_id: string;
  driver_point_up_rate: number;
  follower_count: number;
  manufacturer_id: number;
  race_count: number;
  stats: any;
  ugc_all_count: number;
  ugc_decal_count: number;
  ugc_livery_1_count: number;
  ugc_livery_2_count: number;
  ugc_livery_3_count: number;
  ugc_photo_3_count: number;
  ugc_photo_11_count: number;
  ugc_replay_count: number;
  user_no: number;
}

export interface GtSportProfile {
  country: string
  id: string
  number: number
  status: number
}

export interface StatsModel {
  stats: GtSportStats;
}

export interface ProfileModel {
  profile: GtSportProfile;
}
