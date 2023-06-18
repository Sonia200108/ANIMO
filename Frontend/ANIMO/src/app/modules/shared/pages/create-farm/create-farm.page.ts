import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FarmService } from '../../services/farm.service';
import { AddressService } from '../../services/address.service';
import { Address } from '../../models/address';
import { Farm } from '../../models/farm';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-farm',
  templateUrl: './create-farm.page.html',
  styleUrls: ['./create-farm.page.scss'],
})
export class CreateFarmPage implements OnInit {

  farmname: string;

  street: string;
  number: string;
  city: string;
  zipcode: string;
  country: string;

  newAddress: Address;
  address: Address;
  newFarm: Farm;
  farm: Farm;

  constructor(public rt: Router, public fs: FarmService, public adds: AddressService) { }

  ngOnInit() {
  }
  

  createFarm(){
    this.createAddress()
      .pipe(
        switchMap(() => this.getWholeAddress()),
        switchMap(() => this.postFarm()),
        switchMap(() => this.getFarm())
      )
      .subscribe(() => {
        this.rt.navigate(['createuser', this.farm.id]);
      });
  }

  getFarm(){
    return this.fs.getFarmByName(this.farmname).pipe(
      tap((data: Farm) => {
        this.farm = data;
        console.log(this.farm);
      })
    );
  }

  getWholeAddress(){
    return this.adds.getWholeAddressById(this.street, this.number, this.zipcode, this.city, this.country).pipe(
      tap((data: Address) => {
        this.address = data;
        console.log(this.address);
      })
    );
  }

  postFarm(){
    this.newFarm = new Farm(0, this.farmname, this.address);
    return this.fs.createFarm(this.newFarm).pipe(
      tap((data: Farm) => {
        this.farm = data;
        console.log(this.farm);
      })
    );
  }

  createAddress(){
    this.newAddress = new Address(0, this.street, this.number, this.zipcode, this.city, this.country);
    return this.adds.createAddress(this.newAddress);
  }

  goBack(){
    this.rt.navigate(['newuser']);
  }

}

