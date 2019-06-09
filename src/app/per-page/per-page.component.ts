import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../services/questions.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-per-page',
  templateUrl: './per-page.component.html',
  styleUrls: ['./per-page.component.css']
})
export class PerPageComponent implements OnInit {

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  public quizid;
  public questions;
  public score = 0;
  public submitted = false;
  public user;

  constructor(private quizService: QuizService, private act: ActivatedRoute, private questionsService: QuestionsService) { }

  ngOnInit() {
    this.act
    .queryParams 
    .subscribe(params => {
      //console.log(params);
      this.quizid = params['quizid'];
    });
    this.getQuestions();

    this.quizService.getUserId().subscribe(data =>{
      this.user = data;
    });

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

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
    }
  }

  get filteredQuestions() {
    return (this.questions) ?
      this.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
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

  public setCount(n) {
    this.pager.count = n;
  }

}
