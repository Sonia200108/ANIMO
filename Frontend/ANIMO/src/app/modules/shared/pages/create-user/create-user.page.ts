import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Farm } from '../../models/farm';
import { FarmService } from '../../services/farm.service';
import { User } from 'src/app/classes/user';
import { UserService } from '../../services/user.service';
import { AuthService } from '@auth0/auth0-angular';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  farmId: number;

  farm: Farm;

  currentUser: any;
  
  farmName: string;

  firstname: string;

  lastname: string;

  auth0Id: string;

  user: User;

  constructor(private ar: ActivatedRoute, public fservice: FarmService, public rt: Router, public uservice: UserService,private acc: AccountService,public auth: AuthService,) {
    this.ar.params.subscribe(params => {
      this.farmId = params['farmid'];
    });
   }

  ngOnInit() {
    this.fservice.getFarmById(this.farmId).subscribe((data: Farm) => {
      this.farm = data;
      this.farmName = this.farm.name;
    });

    this.auth.user$.subscribe(user => {
      this.currentUser = user;
      this.auth0Id = this.currentUser.sub;
      localStorage.setItem('auth0Id', this.auth0Id);
    });
      

  }

  createUser(){

    this.auth0Id = localStorage.getItem('auth0Id') || '';
    this.user = new User(0,this.firstname, this.lastname, this.farm, this.auth0Id);
    this.uservice.createUser(this.user).subscribe((data: User) => {
      this.user = data;
      this.rt.navigate(['login']);
    });
    
  }

  goBack(){
    this.rt.navigate(['choosefarm']);
  }

}
