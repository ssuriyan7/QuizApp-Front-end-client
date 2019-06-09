import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonpageComponent } from './commonpage/commonpage.component'
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { PerPageComponent } from './per-page/per-page.component';
import { AdminResultComponent } from './admin-result/admin-result.component';
import { ResultComponent } from './result/result.component';
const routes: Routes = [
  {
    path: '',
    component: CommonpageComponent 
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'userchoice',
    component: UserChoiceComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'perpagequestions',
    component: PerPageComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'createQuiz',
    component: CreatequizComponent
  },
  {
    path: 'results',
    component: AdminResultComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
