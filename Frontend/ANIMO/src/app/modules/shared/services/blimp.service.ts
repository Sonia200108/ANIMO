import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';
import { Blimp } from '../models/blimp';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlimpService {

  constructor(private http: HttpClient) { }

  getBlimpss(): Observable<Blimp[]> {
    return this.http.get<Blimp[]>(`${apiUrl}/blimps`);
  }

  getBlimpsByFarmerId(id:number): Observable<Blimp[]> {
    return this.http.get<Blimp[]>(`${apiUrl}/blimps/farm/${id}`);
  }

  getBlimp(id:number): Observable<Blimp> {
    return this.http.get<Blimp>(`${apiUrl}/blimps/${id}`);
  }
}
