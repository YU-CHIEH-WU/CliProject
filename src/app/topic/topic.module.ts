import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TopicComponent } from './topic.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    TopicComponent
  ],
  declarations: [TopicComponent]
})
export class TopicModule { }
