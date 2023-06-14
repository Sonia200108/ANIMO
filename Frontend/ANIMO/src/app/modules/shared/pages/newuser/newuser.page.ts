import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.page.html',
  styleUrls: ['./newuser.page.scss'],
})
export class NewuserPage implements OnInit {

  constructor(public acc: AccountService, public rt: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.acc.logout(true);
  }

  goToChooseFarm(){
    this.rt.navigate(['f/choosefarm']);
  }

}
