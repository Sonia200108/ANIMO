import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Blimp } from 'src/app/modules/shared/models/blimp';
import { AccountService } from 'src/app/modules/shared/services/account.service';
import { BlimpService } from 'src/app/modules/shared/services/blimp.service';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { MapService } from 'src/app/modules/shared/services/map.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: string = "";
  
  blimps: Blimp[] = [];

  currentUser: any;

  searchText: string = '';

  newBlimp: Blimp;


  constructor(private alertController: AlertController,public auth: AuthService, public blimpservice: BlimpService, public rt: Router, public acc: AccountService, public map: MapService) {

   }

  ngOnInit() {

    this.currentUser = this.acc.getCurrentUser();
   
    this.blimpservice.getBlimpsByFarmerId(this.currentUser.farm.id).subscribe((data: Blimp[]) => {
      this.blimps = data;
      
    }
    );
 
  }

  startScan = async () => {
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
  
    const result = await BarcodeScanner.startScan();
  
    if (result.hasContent) {
      const qrData = JSON.parse(result.content);
  
      this.newBlimp = new Blimp(0, qrData.name, qrData.longitude, qrData.latitude, this.currentUser.farm);

      this.blimpservice.createBlimp(this.newBlimp).subscribe();
  
      await this.showBlimpCreatedPopup(this.newBlimp);
    }
  };
  
  async showBlimpCreatedPopup(newBlimp: Blimp) {
    const alert = await this.alertController.create({
      header: 'New Blimp Created',
      message: `Name: ${newBlimp.name}<br>Longitude: ${newBlimp.longitude}<br>Latitude: ${newBlimp.latitude}`,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            window.location.reload();
          }
        }
      ]
    });
  
    await alert.present();
  }

  getLatLong() {
    
  }

  goToProfile() {
    this.rt.navigate(['/f/profile']);
  }

  goToMainMap() {
    this.rt.navigate(['/f/mainmap', this.currentUser.farm.id]);
  }

  goToBlimpMap(blimpid: number) {
    this.rt.navigate(['/f/blimpmap',blimpid]);
  }

  goToBlimpInfo(blimpid: number) {
    this.rt.navigate(['/f/blimpinfo',blimpid]);
  }

}
