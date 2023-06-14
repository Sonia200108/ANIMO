import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blimp } from 'src/app/modules/shared/models/blimp';
import { Farm } from 'src/app/modules/shared/models/farm';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';
import { FarmService } from 'src/app/modules/shared/services/farm.service';
import { MapService } from 'src/app/modules/shared/services/map.service';

@Component({
  selector: 'app-mainmap',
  templateUrl: './mainmap.page.html',
  styleUrls: ['./mainmap.page.scss'],
})
export class MainmapPage implements OnInit {

  latitude: number;
  longitude: number;

  currentFarm: Farm;
  farmAddress: string;

  farmid: number;

  blimps: Blimp[] = [];

  constructor(public rt: Router, private route: ActivatedRoute,public map: MapService, public farms: FarmService, public blimpservice: BlimpService) {
    this.farmid = parseInt(this.route.snapshot.paramMap.get('farmid') || '{}');

    this.farms.getFarmById(this.farmid).subscribe((data: any) => {
      this.currentFarm = data;
      this.farmAddress = this.currentFarm.address.street + "" + this.currentFarm.address.number + "," + this.currentFarm.address.zipCode + "" + this.currentFarm.address.city + "" + this.currentFarm.address.country;
      this.map.getLatLong(this.farmAddress).subscribe((data: any) => {
        this.latitude = data.results[0].geometry.location.lat;
        this.longitude = data.results[0].geometry.location.lng;
        }
    );
    }
    );

    this.blimpservice.getBlimpsByFarmerId(this.farmid).subscribe((data: Blimp[]) => {
      this.blimps = data;
    }
    );
    
   }

  ngOnInit() {

  }

  goToDashboard() {
    this.rt.navigate(['/f/dashboard']);
  }

  goToProfile() {
    this.rt.navigate(['/f/profile']);
  }

}
