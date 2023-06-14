import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farm } from '../models/farm';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FarmService {

  
  constructor(private http: HttpClient) { }

  getFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(`${apiUrl}/farms`);
  }

  getFarmById(id: number): Observable<Farm> {
    return this.http.get<Farm>(`${apiUrl}/farms/${id}`);
  }

  
}
