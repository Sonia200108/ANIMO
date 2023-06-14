import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Geocoding } from '../models/geocoding';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getLatLong(address: string): Observable<Geocoding> {
    return this.http.get<Geocoding>(`${apiUrl}/geocode/${address}`);
  }
}
