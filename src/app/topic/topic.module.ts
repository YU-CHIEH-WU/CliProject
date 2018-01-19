import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopicRoutingModule } from './topic-routing.module';

import { TopicComponent } from './topic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TopicRoutingModule
  ], exports: [
    TopicComponent
  ],
  declarations: [TopicComponent]
})
export class TopicModule { }
