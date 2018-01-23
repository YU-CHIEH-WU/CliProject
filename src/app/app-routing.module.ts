import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './service/auth/auth.guard';
import { HomeComponent } from './home/home.component';
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
    path: 'codewar/home',
    component: CodewarComponent,
    // canActivate: [AuthGuard] for test
  },
  {
    path: 'topic',
    component: TopicComponent,
    canActivate: [AuthGuard]
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
