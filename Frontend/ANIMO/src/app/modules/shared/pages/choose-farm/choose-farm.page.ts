import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmService } from '../../services/farm.service';
import { Farm } from '../../models/farm';

@Component({
  selector: 'app-choose-farm',
  templateUrl: './choose-farm.page.html',
  styleUrls: ['./choose-farm.page.scss'],
})
export class ChooseFarmPage implements OnInit {

  farms: Farm[] = [];


  selectedFarm: String;
  constructor(public rt: Router, public fservice: FarmService) { 

  }

  ngOnInit() {
    this.fservice.getFarms().subscribe((data: Farm[]) => {
      this.farms = data;
      console.log(this.farms);
    });
  }

  goBack() {
    this.rt.navigate(['f/newuser']);
  }

  gotoCreateUser(){
    this.rt.navigate(['f/createuser', this.selectedFarm]);
  }
}
