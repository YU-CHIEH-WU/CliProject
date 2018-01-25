import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// shared

// feature-part
import { IdeaModule } from './idea/idea.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IdeaModule.forRoot()
  ],
  declarations: []
})
export class TopicModule { }
