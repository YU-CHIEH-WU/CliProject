import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodewarComponent } from './codewar/codewar.component';
import { TopicComponent } from './topic/topic.component';
const routes: Routes = [
  {
    path: 'codewar',
    component: CodewarComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
