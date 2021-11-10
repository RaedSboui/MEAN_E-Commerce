import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlAPI = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http.get<User[]>(this.urlAPI);
  }

  delete(id: any) {
    return this.http.delete<void>(this.urlAPI + id).toPromise();
  }
}
