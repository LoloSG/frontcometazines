
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { IfStmt, TagContentType } from '@angular/compiler';





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;
  public token: string | any;
  public stats: string | any;

  constructor(
    private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/';
    this.token = {}

  }




  registro(values: { name: string, surname: string, nick: string, email: string, password: string }): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<User>(`${this.baseUrl}register`, values)
    );
  };

  login(values: { email: string, password: string }): Promise<any> {
    return lastValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}login`, values)
    );
  };


  getToken() {
    let token = localStorage.getItem('gettoken');

    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    };

    return this.token;
  };


  getStats() {
    let stats = localStorage.getItem('stats');

    if (stats != "undefined") {
      this.stats = stats
      console.log(stats);
    } else {
      this.stats = null
    };
  };


  getCounters(userId = null): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

    if (userId != null) {
      return this.httpClient.get(this.baseUrl + 'counters/' + userId, { headers: headers })
    } else {
      return this.httpClient.get(this.baseUrl + 'counters', { headers: headers })
    }
  }

}
