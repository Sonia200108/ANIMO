import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Blimp } from 'src/app/modules/shared/models/blimp';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';

import { Geolocation } from '@capacitor/geolocation';
import { MapService } from 'src/app/modules/shared/services/map.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: string = "";
  
  blimps: Blimp[] = [];

  currentUser: any;

  searchText: string = '';
  
  constructor(public auth: AuthService, public blimpservice: BlimpService, public rt: Router, public acc: AccountService, public map: MapService) {

   }

  ngOnInit() {

    this.currentUser = this.acc.getCurrentUser();
   
    this.blimpservice.getBlimpsByFarmerId(this.currentUser.farm.id).subscribe((data: Blimp[]) => {
      this.blimps = data;
      
    }
    );
 
  }

  getLatLong() {
    
  }

  goToProfile() {
    this.rt.navigate(['/f/profile']);
  }

  goToMainMap() {
    this.rt.navigate(['/f/mainmap', this.currentUser.farm.id]);
  }

  goToBlimpMap(blimpid: number) {
    this.rt.navigate(['/f/blimpmap',blimpid]);
  }

  goToBlimpInfo(blimpid: number) {
    this.rt.navigate(['/f/blimpinfo',blimpid]);
  }

}
