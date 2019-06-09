import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public quizid;
  public results;
  public c = 0;

  constructor(private quizService: QuizService, private act: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.act
    .queryParams 
    .subscribe(params => {
      this.quizid = params['quizid'];
    });
    this.getResults();
  }

  public count() {
    this.c += 1;
  }

  public getResults() {
    this.quizService.getResult(this.quizid).subscribe(data => {
      this.results = data;
    });
  }

}
