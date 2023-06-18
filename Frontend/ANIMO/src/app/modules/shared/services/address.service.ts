import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { 
  }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${apiUrl}/addresses`);
  }

  getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${apiUrl}/addresses/${id}`);
  }

  getWholeAddressById(street:string,number:string, zipcode:string, city:string, country:string ): Observable<Address> {
    console.log(`${apiUrl}/addresses/${street}/${number}/${zipcode}/${city}/${country}`);
    return this.http.get<Address>(`${apiUrl}/addresses/${street}/${number}/${zipcode}/${city}/${country}`);
  }

  createAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${apiUrl}/addresses`, address);
  }
}
