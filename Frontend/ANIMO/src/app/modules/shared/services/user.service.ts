import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { apiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/users`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${apiUrl}/users`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<User>(`${apiUrl}/users/${id}`);
  }
}
