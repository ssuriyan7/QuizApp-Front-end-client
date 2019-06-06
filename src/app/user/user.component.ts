import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../services/quiz.service';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public quizes;
  public questions;
  constructor(private quizService: QuizService, private router: Router, private act: ActivatedRoute) { }

  ngOnInit() {
    this.getQuizes();
  }
  public getQuizes() {
    this.quizService.getQuizes().subscribe(
      data => {this.quizes = data;}
    );
  }
  public getQuestions(n:number) {
    this.router.navigate(['userchoice'], { queryParams: { quizid: n } });
  }
}
