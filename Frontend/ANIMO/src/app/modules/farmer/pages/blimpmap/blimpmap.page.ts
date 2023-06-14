import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';

@Component({
  selector: 'app-blimpmap',
  templateUrl: './blimpmap.page.html',
  styleUrls: ['./blimpmap.page.scss'],
})
export class BlimpmapPage implements OnInit {

  currentBlimp: any;

  blimpId: number;

  latitude: number;

  longitude: number;

  constructor(public rt: Router, public bs: BlimpService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('blimpid'));
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');

    this.bs.getBlimp(this.blimpId).subscribe((data: any) => {
      this.currentBlimp = data;
      this.latitude = this.currentBlimp.latitude;
      this.longitude = this.currentBlimp.longitude;
      console.log(this.currentBlimp);
      console.log(this.latitude);
      console.log(this.longitude);
    }
    );
   }

  ngOnInit() {
  }

  goBack() {
    this.rt.navigate(['/f/blimpinfo', this.blimpId]);
  }


}
