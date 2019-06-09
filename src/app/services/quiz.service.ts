import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Option } from '../models/option.model';
import { Question } from '../models/question.model';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../models/result.model';
import { Quiz } from '../models/quiz.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }
  public options: Option[] = [new Option,new Option,new Option];
  public quiz;
  public question;
  public paramQuestion = new Question;
  public usersub;
  public qz;
  public result;
  params = new HttpParams();
  public getQuizes() {
    return this.http.get('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/getQuizes');
  }
  public createQuiz(quizName: string) {
    this.http.post('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/insertQuiz',quizName).subscribe(data =>{this.quiz = data});
  }

  public insertQuestion(questionText:string) {
    this.paramQuestion.questionText = questionText;
    this.paramQuestion.quiz = this.quiz;
    this.http.post('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/insertQuestion',this.paramQuestion).subscribe(x=>{this.question=x});
  }

  public insertOption(choice1:string,choice2:string,choice3:string,torf1:boolean,torf2:boolean,torf3:boolean){
    this.options[0].optionText=choice1;
    this.options[0].correct=torf1;
    this.options[0].question=this.question;
    this.options[1].optionText=choice2;
    this.options[1].correct=torf2;
    this.options[1].question=this.question;
    this.options[2].optionText=choice3;
    this.options[2].correct=torf3;
    this.options[2].question=this.question;
    this.http.post('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/insertOption',this.options).subscribe(x=>{x});
  }

  public setUserSubject(id: String) {
    this.usersub = new BehaviorSubject(id);
  }
  public getUserId() {
    return this.usersub.asObservable();
  }

  public insertResult(user, score, quizid) {
    this.result = new Result();
    this.qz = new Quiz();
    this.result.userName = user;
    this.result.score = score;
    this.qz.id = quizid;
    this.result.quiz = this.qz;
    this.http.post('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/insertResult', this.result).subscribe(x=>{x});
  }

  public getResult(quizid) {
    this.params = this.params.set('quizid', quizid);
    return this.http.get('http://10.160.205.33:8090/quizapplication-0.0.1-SNAPSHOT/getResults',{params:this.params});
  }


}
//http://10.160.205.33:8090/quizapp/
