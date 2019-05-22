import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  params = new HttpParams();
    
  constructor(private http: HttpClient) { }
  public getQuestions(quizid) {
    this.params = this.params.set('quizid', quizid);
    return this.http.get('server/getQuestions',{params:this.params});
  }
}
