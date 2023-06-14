import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  

  constructor(public rt: Router, public bs: BlimpService, private route: ActivatedRoute) { 
    console.log(this.route.snapshot.paramMap.get('blimpid'));
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');

    this.bs.getBlimp(this.blimpId).subscribe((data: any) => {
      this.currentBlimp = data;
      this.latitude = this.currentBlimp.latitude;
      this.longitude = this.currentBlimp.longitude;
      this.blimpName = this.currentBlimp.name;
    }
    );

    
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

  startBlimp(){
    this.bs.start("startdcmotor").subscribe((data: any) => {
    } );
  }

  stopBlimp(){
    this.bs.stop("stopdcmotor").subscribe((data: any) => {

  });
}


}
