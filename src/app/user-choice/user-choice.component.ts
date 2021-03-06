import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.css']
})
export class UserChoiceComponent implements OnInit {

  constructor(private router:Router, private act: ActivatedRoute) { }

  public quizid;
  ngOnInit() {
    this.act
    .queryParams 
    .subscribe(params => {
      //console.log(params);
      this.quizid = params['quizid'];
    });
  }
  public perpageQuiz() {
    this.router.navigate(["perpagequestions"], { queryParams: { quizid: this.quizid } });
  }

  public singlepageQuiz() {
    this.router.navigate(["questions"], { queryParams: { quizid: this.quizid } });
  }
}
