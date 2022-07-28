import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private baseUrl: string;


  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/';

  };

  addFollow(token: string, follow: string): Observable<any> {
    let params = JSON.stringify(follow);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

    return this.httpClient.post(this.baseUrl + 'follow', params, { headers: headers });
  };


  deleteFollow(token: string, id: any) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

    return this.httpClient.delete(this.baseUrl + 'follow/' + id, { headers: headers });
  };

}
