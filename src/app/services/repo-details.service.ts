import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoDetailsService {

  url: string = "https://api.github.com/users/supreetsingh247/repos";

  constructor(private http: HttpClient) { }

  getRepoList(): Observable<any>{
    return this.http.get<any>(this.url);
  }
}
