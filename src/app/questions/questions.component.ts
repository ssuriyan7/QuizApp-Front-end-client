import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../services/questions.service';
import {Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/question.model';

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
  constructor(private questionsService: QuestionsService,private router: Router, private act: ActivatedRoute) { }

  ngOnInit() {
    this.act
    .queryParams 
    .subscribe(params => {
      //console.log(params);
      this.quizid = params['quizid'];
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
  public isCorrect(question) {
    if(!question.answered) {
      this.score = question.options.every(x => x.selected === x.correct) ? this.score + 1 : this.score;
      question.answered = true;
    }
    //console.log(this.score);
  }
}
