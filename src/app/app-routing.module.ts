import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonpageComponent } from './commonpage/commonpage.component'
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
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
    path: 'user',
    component: UserComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  },
  {
    path: 'createQuiz',
    component: CreatequizComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
