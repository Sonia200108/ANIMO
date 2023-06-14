import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html'
})
export class ProfilePage implements OnInit {

  currentUser: any;

  farmId: number;
  constructor(public rt: Router, public acc: AccountService, private ar: ActivatedRoute, public user: UserService) {
    
    this.currentUser = this.acc.getCurrentUser();

    this.farmId = this.currentUser.farm.id;

   }

  ngOnInit() {

    console.log(this.currentUser);
  }

  goToDashboard() {
    this.rt.navigate(['/f/dashboard']);
  }

  logout() {
    this.acc.logout(true);
  }

  goToMainMap() {
    this.rt.navigate(['/f/mainmap/', this.farmId]);
  }
}
