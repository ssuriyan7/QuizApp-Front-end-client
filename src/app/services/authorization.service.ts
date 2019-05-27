import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model';
import {map, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public result;
  constructor(private http: HttpClient) { 
  }
  public getUser(user: User): Observable<User> {
    return this.http.post<User>("10.160.205.33:8090/quizapp/insertUser", user).pipe(
      map(data => new User().deserialize(data))
    );
  }
  login(user: User){
     this.result = this.http.post<string>('10.160.205.33:8090/quizapp/login', user).pipe;
    return this.result;
  }
}
