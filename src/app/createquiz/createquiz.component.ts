import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../models/quiz.model';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})
export class CreatequizComponent implements OnInit {

  constructor(private quizService: QuizService) { }
  public quiz = new Quiz();
  public clicked = false;
  public invalid="";
  public questioninvalid="";
  public ch=0;
  public lastclick = false;
  ngOnInit() {
  }
  public createQuiz(quizname:string) {
    //console.log(quizname);
    //this.quiz.quizId = 1;
    //this.quiz.quizName = quizname;
    if(!((quizname.trim()).length === 0)) {
      this.clicked = true;
      this.invalid = "";
      this.quizService.createQuiz(quizname);
    } else {
      this.invalid = "Please enter a quiz name";
      this.clicked = false;
    }
    
  }
  public insertOption(questionText: string,choice1: string,torf1: boolean,choice2: string,torf2:boolean,choice3: string,torf3:boolean) {
    if(questionText.trim().length !== 0 && choice1.trim().length !==0 && choice2.trim().length !==0 && choice3.trim().length !==0) {
      this.quizService.insertOption(choice1,choice2,choice3,torf1,torf2,torf3);
      this.questioninvalid="";
    }
    else {
      this.questioninvalid="Please fill all the fields";
    }
  }
  public insertQuestion(questionText: string) {
    if(questionText.trim().length !== 0) {
      this.quizService.insertQuestion(questionText);
      this.questioninvalid="";
    }
    else {
      this.questioninvalid="Please fill all the fields";
    }
  }
}
