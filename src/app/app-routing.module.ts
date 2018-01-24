import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAuthService } from './core/service/user/user-auth.service';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CodewarComponent } from './codewar/codewar.component';
import { TopicComponent } from './topic/topic.component';
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
    path: 'codewar/home',
    component: CodewarComponent,
    canActivate: [UserAuthService]
  },
  {
    path: 'topic',
    component: TopicComponent,
    canActivate: [UserAuthService]
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
