import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthorizationService} from './services/authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonpageComponent } from './commonpage/commonpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { QuizService } from './services/quiz.service';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './services/questions.service';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { PerPageComponent } from './per-page/per-page.component';
import { ResultComponent } from './result/result.component';
import { AdminResultComponent } from './admin-result/admin-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonpageComponent,
    AdminComponent,
    UserComponent,
    QuestionsComponent,
    CreatequizComponent,
    UserChoiceComponent,
    PerPageComponent,
    ResultComponent,
    AdminResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [AuthorizationService,QuizService,QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
