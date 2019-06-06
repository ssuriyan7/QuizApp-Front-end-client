import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  params = new HttpParams();
  params1 = new HttpParams();
    
  constructor(private http: HttpClient) { }
  public getQuestions(quizid) {
    this.params = this.params.set('quizid', quizid);
    return this.http.get('server/getQuestions',{params:this.params});
  }
  public getOptions(questionid) {
    this.params1 = this.params1.set('questionid', questionid);
    return this.http.get('server/getOptions',{params:this.params1});
  }
}
