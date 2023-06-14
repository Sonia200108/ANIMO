import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/classes/user';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { Auth0Service } from 'src/app/modules/shared/services/auth0.service';
import { UserService } from 'src/app/modules/shared/services/user.service';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
})
export class AuthenticationPage implements OnInit {

  users: User[] = [];

  currentUser: any;

  constructor(public auth: AuthService, private acc: AccountService, private rt: Router, private userS: UserService,private auth0Service: Auth0Service) { 

    this.userS.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
    this.auth.user$.subscribe(user => {
      this.currentUser = user;
    });

    this.auth.idTokenClaims$
  }

  ngOnInit() {
    // this.auth0Service.getAllAuth0Users().subscribe((data: any) => {
    //   console.log(data);
    // });


    

    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe((token) => {
          console.log(token);
          this.acc.setToken(token);
          if (this.users.length == 0) {
            this.rt.navigate(['/f/newuser']);
          }
          for (let user of this.users) {
            if (user.auth0id === this.currentUser.sub) {
              this.acc.setCurrentUser(user);
              this.rt.navigate(['/f/dashboard']);
              return; 
            }
          }
          this.rt.navigate(['/f/newuser']);
                 
        });
      }
      else {
        this.auth.loginWithRedirect();
      }
    });
  }

}
