import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css']
})
export class AdminResultComponent implements OnInit {

  public quizes;
  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.getQuizes();
  }

  public getQuizes() {
    this.quizService.getQuizes().subscribe(
      data => {this.quizes = data;}
    );
  }

  public getResults(n: number) {
    this.router.navigate(['result'], { queryParams: { quizid: n } });
  }

}
