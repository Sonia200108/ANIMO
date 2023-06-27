import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Hammer from 'hammerjs';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';

@Component({
  selector: 'app-blimpcontrol',
  templateUrl: './blimpcontrol.page.html',
  styleUrls: ['./blimpcontrol.page.scss'],
})
export class BlimpcontrolPage implements OnInit {

  currentUser: any;

  isRunning: boolean = false;

  blimpId: number;

  bothOn: boolean;

  @ViewChild('upElement', { static: true }) upElementRef: ElementRef;
  @ViewChild('downElement', { static: true }) downElementRef: ElementRef;
  @ViewChild('leftElement', { static: true }) leftElementRef: ElementRef;
  @ViewChild('rightElement', { static: true }) rightElementRef: ElementRef;

  constructor(private route: ActivatedRoute, public rt: Router, public acc: AccountService, public bs: BlimpService) {
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');

    this.currentUser = this.acc.getCurrentUser();
  }

  ngOnInit() {
    const upElement = this.upElementRef.nativeElement;
    const downElement = this.downElementRef.nativeElement;
    const leftElement = this.leftElementRef.nativeElement;
    const rightElement = this.rightElementRef.nativeElement;

    const mc = new Hammer.Manager(upElement as HTMLElement);
    const mc2 = new Hammer.Manager(downElement as HTMLElement);
    const mc3 = new Hammer.Manager(leftElement as HTMLElement);
    const mc4 = new Hammer.Manager(rightElement as HTMLElement);


    const press = new Hammer.Press({ time: 500 });
    const press2 = new Hammer.Press({ time: 500 });
    const press3 = new Hammer.Press({ time: 500 });
    const press4 = new Hammer.Press({ time: 500 });

    mc.add(press);
    mc2.add(press2);
    mc3.add(press3);
    mc4.add(press4);
  
    let intervalIdUp: any = null;
    let intervalIdDown: any = null;
    let intervalIdLeft: any = null;
    let intervalIdRight: any = null;
  
    mc.on('press', () => {
      this.bs.start("godowns").subscribe((data: any) => {});
    });
    
    mc.on('pressup', () => {
      clearInterval(intervalIdUp);
      this.bs.start("standards").subscribe((data: any) => {});
    });
    
    mc2.on('press', () => {
      this.bs.start("goups").subscribe((data: any) => {});
    });
    
    mc2.on('pressup', () => {
      clearInterval(intervalIdDown);
      this.bs.start("standards").subscribe((data: any) => {});
    });

    mc3.on('press', () => {
      if (this.bothOn) {
        this.bs.start("stoprightdc").subscribe((data: any) => {});
      } else {
        this.bs.start("startleftdc").subscribe((data: any) => {});
      }
    });
    
    mc3.on('pressup', () => {
      console.log('unleashed stopped dc');
      clearInterval(intervalIdLeft);
      if (this.bothOn) {
        this.bs.start("startrightdc").subscribe((data: any) => {});
      } else {
        this.bs.start("stopleftdc").subscribe((data: any) => {});
      }
    });
    
    mc4.on('press', () => {
      if (this.bothOn) {
        this.bs.start("stopleftdc").subscribe((data: any) => {});
      } else {
        this.bs.start("startrightdc").subscribe((data: any) => {});
      }
    });
    
    mc4.on('pressup', () => {
      clearInterval(intervalIdRight);
      if (this.bothOn) {
        this.bs.start("startleftdc").subscribe((data: any) => {});
      } else {
        this.bs.start("stoprightdc").subscribe((data: any) => {});
      }
    });
  }

  goBack() {
    this.rt.navigate(['/f/blimpinfo', this.blimpId]);
  }

  goToDashboard() {
    this.rt.navigate(['/f/dashboard']);
  }

  goToMainMap() {
    this.rt.navigate(['/f/mainmap', this.currentUser.farm.id]);
  }

  goToProfile() {
    this.rt.navigate(['/f/profile']);
  }

  start() {
    this.isRunning = true;
    console.log("start");
    this.bs.start("startbothdc").subscribe((data: any) => {
    } );

    this.bothOn = true;
  }

  stop() {
    this.isRunning = false;

    console.log("stop");

    this.bs.stop("stopbothdc").subscribe((data: any) => {

    });

    this.bothOn = false;
  }

}