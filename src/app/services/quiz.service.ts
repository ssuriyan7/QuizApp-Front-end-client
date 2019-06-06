import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Option } from '../models/option.model';
import { Question } from '../models/question.model';

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
  public getQuizes() {
    return this.http.get('server/getQuizes');
  }
  public createQuiz(quizName: string) {
    this.http.post('server/insertQuiz',quizName).subscribe(data =>{this.quiz = data});
  }

  public insertQuestion(questionText:string) {
    this.paramQuestion.questionText = questionText;
    this.paramQuestion.quiz = this.quiz;
    this.http.post('server/insertQuestion',this.paramQuestion).subscribe(x=>{this.question=x});
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
    this.http.post('server/insertOption',this.options).subscribe(x=>{x});
  }
}
//http://10.160.205.33:8090/quizapp/