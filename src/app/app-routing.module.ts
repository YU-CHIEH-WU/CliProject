import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserService } from './service/core/user/user.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BugComponent } from './bug/bug.component';
import { CodewarComponent } from './codewar/codewar.component';
import { IdeaListComponent } from './topic/idea/idea-list/idea-list.component';
import { IdeaAddComponent } from './topic/idea/idea-add/idea-add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bug',
    component: BugComponent
  },
  {
    path: 'codewar',
    component: CodewarComponent,
    canActivate: [UserService]
  },
  {
    path: 'topic/idea/list',
    component: IdeaListComponent,
    canActivate: [UserService]
  },
  {
    path: 'topic/idea/add',
    component: IdeaAddComponent,
    canActivate: [UserService]
  },
  // change to 404
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
