import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';

@Component({
  selector: 'app-blimp-info',
  templateUrl: './blimp-info.page.html',
  styleUrls: ['./blimp-info.page.scss'],
})
export class BlimpInfoPage implements OnInit {

  currentBlimp: any;

  blimpId: number;

  latitude: number;

  longitude: number;

  blimpName: string;

  currentUser: any;

  randomRange: number;

  randomBattery: number;

  randomTemperture: number;
  

  constructor(public rt: Router, public bs: BlimpService, private route: ActivatedRoute, public acc: AccountService) { 
    console.log(this.route.snapshot.paramMap.get('blimpid'));
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');

    this.bs.getBlimp(this.blimpId).subscribe((data: any) => {
      this.currentBlimp = data;
      this.latitude = this.currentBlimp.latitude;
      this.longitude = this.currentBlimp.longitude;
      this.blimpName = this.currentBlimp.name;
    }
    );

    this.currentUser = this.acc.getCurrentUser();

    this.randomRange = Math.floor(Math.random() * 1000) + 1;

    this.randomBattery = Math.floor(Math.random() * 100) + 1;

    this.randomTemperture = Math.floor(Math.random() * 40) + 25;
    
  }

  ngOnInit() {
  }

  goBack(){
    this.rt.navigate(['/f/dashboard']);
  }

  goToControl(){
    this.rt.navigate(['/f/blimpcontrol', this.blimpId]);
  }

  goToMap(){
    this.rt.navigate(['/f/blimpmap', this.blimpId]);
  }


  goToDashboard(){
    this.rt.navigate(['/f/dashboard']);
  }

  goToMainMap(){
    this.rt.navigate(['/f/mainmap', this.currentUser.farm.id]);
  }

  goToProfile(){
    this.rt.navigate(['/f/profile']);
  }

  goToVideo(){
    this.rt.navigate(['/f/blimpvideo', this.blimpId]);
  }

}
