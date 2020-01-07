import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  url: string = "https://api.github.com/users/supreetsingh247"
  constructor(private http: HttpClient) { }

  getprofiledata(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
