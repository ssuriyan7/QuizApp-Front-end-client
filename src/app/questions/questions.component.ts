import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/question.model';
import { ClrLoadingState } from '@clr/angular';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public quizid;
  public questions;
  public options;
  public answer;
  public score = 0;
  public showResult= false;
  public user;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  constructor(private quizService: QuizService, private questionsService: QuestionsService,private router: Router, private act: ActivatedRoute) { }

  ngOnInit() {
    this.act
    .queryParams 
    .subscribe(params => {
      this.quizid = params['quizid'];
    });

    this.quizService.getUserId().subscribe(data =>{
      this.user = data;
      console.log(this.user);
    });

    this.getQuestions();
  }
  public getQuestions() {
    this.questionsService.getQuestions(this.quizid).subscribe(
      data => {this.questions = data;}
    );
  }
  public onSelect(question, option) {
    question.options.forEach((x) => { 
      if (x.optionId !== option.optionId) {
        x.selected = false;
      }
      else {
        x.selected = true;
      }
     });
  }
  public calculateScore() {
    for(let question of this.questions) {
      if(!question.answered) {
        this.score = question.options.every(x => x.selected === x.correct) ? this.score + 1 : this.score;
        question.answered = true;
      }
    }

    this.quizService.insertResult(this.user, this.score, this.quizid);
  }
}
