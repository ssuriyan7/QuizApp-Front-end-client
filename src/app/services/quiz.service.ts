import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Quiz } from '../models/quiz.model';
import {map, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Option } from '../models/option.model';
import { Options } from 'selenium-webdriver/opera';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }
  //public qId;
  //public choices;
  //public torfs;
  public options: Option[] = [new Option,new Option,new Option];
  //public option1 = new Option;
  //public option2 = new Option;
  //public option3 = new Option;
  public getQuizes() {
    return this.http.get('http://10.160.205.33:8090/quizapp/showQuizes');
  }
  public createQuiz(quizName: string) {
    //console.log(quizName);
    this.http.post('http://10.160.205.33:8090/quizapp/insertQuiz',quizName).subscribe(data =>{data});
  }
  public insertOption(choice1:string,choice2:string,choice3:string,torf1:boolean,torf2:boolean,torf3:boolean){
    //this.choices = [choice1,choice2,choice3];
    //this.torfs = [torf1,torf2,torf3];
    this.options[0].optionText=choice1;
    this.options[0].correct=torf1;
    //this.http.post('server/insertOption',this.option1).subscribe(x=>{x});
    this.options[1].optionText=choice2;
    this.options[1].correct=torf2;
    //this.http.post('server/insertOption',this.option2).subscribe(x=>{x});
    this.options[2].optionText=choice3;
    this.options[2].correct=torf3;

    //console.log(this.options);
    this.http.post('http://10.160.205.33:8090/quizapp/insertOption',this.options).subscribe(x=>{x});

  }
  public insertQuestion(questionText:string) {
    this.http.post('http://10.160.205.33:8090/quizapp/insertQuestion',questionText).subscribe(x=>{x});
  }
}
