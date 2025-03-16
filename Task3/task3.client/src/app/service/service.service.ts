import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface UserData {
  name: string;
  age: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://67cea6ee125cd5af757b6514.mockapi.io/Users';

  SignUp(data: UserData): Observable<UserData> {
    return this.http.post<UserData>(this.apiUrl, data);
  }

  SignIn(data: UserData): Observable<UserData[]> {
    return this.http.get<UserData[]>(this.apiUrl);
  }
}
