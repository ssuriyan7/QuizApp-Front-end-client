import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { User } from '../models/user.model';
import {Router} from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { BehaviorSubject } from 'rxjs';
//import {User} from '../models/user.model';

@Component({
  selector: 'app-commonpage',
  templateUrl: './commonpage.component.html',
  styleUrls: ['./commonpage.component.css']
})

export class CommonpageComponent implements OnInit {
  valid : string = '';
  private adminpassword = 'admin';
  constructor(private quizService: QuizService, private router: Router,private authService :AuthorizationService) { }

  ngOnInit() {
    
  }
  public selectedLink: string="user";  
        
  setradio(e: string): void {  
    this.selectedLink = e;  
  }

  public isSelected(name: string): boolean {  
    if (!this.selectedLink) { 
      return false;  
    }  
    return (this.selectedLink === name);
  }

  public viewQuizes(id: String) {
    if((id.trim()).length === 0) {   
      this.valid="Please enter user name";
    }
    else {   
      this.valid='';
      this.router.navigate(["user"]);
      this.quizService.setUserSubject(id);
    }
  }

  public viewConsole(pass: string) {
    if((pass.trim()).length === 0) {   
      this.valid="Please enter password";
    }
    else {
      if(pass === this.adminpassword) {
        this.valid='';
        this.router.navigate(["admin"]);
      }
      else {
        this.valid = "Please enter a valid password";
      }   
    }
  }

  //authorize(id: string, pass: string): void { 
   // if((id.trim()).length === 0 || (pass.trim()).length === 0) {   
   // }
   // else {    }
  //}

  /*register(id: string, pass: string): void {

    if((id.trim()).length === 0 || (pass.trim()).length === 0) {
      //console.warn("WARNING: INVALID INPUT!");
    } else {
      this.uservar2 = new User();
      this.uservar2.userId = id;
      this.uservar2.password = pass;
      //console.log(this.uservar2.userId + " " + this.uservar2.password);
      this.authService.getUser(this.uservar2).subscribe( x =>
        {console.log(x); this.uservar2 = x; console.log(this.uservar2);}
      );
      //uservar => {this.uservar1.userId = uservar.userId; 
       // this.uservar1.password = uservar.password;}
      //);
      //console.log(this.uservar1.userId, " ", this.uservar1.password);
    }
    

  }*/

  /*authorizeAdmin(pass: string): void {
    if((pass.trim()).length === 0) {
      
    } else {

      this.uservar2 = new User();
      this.uservar2.userId = "admin";
      this.uservar2.password = pass;
      console.log(this.uservar2.userId + " " + this.uservar2.password);
      this.authService.login(this.uservar2).subscribe(
      uservar => {this.result = uservar;}
      );
      console.log(this.result);
    }
  }*/
}