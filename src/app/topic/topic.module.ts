import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// shared
import { TopicComponent } from './topic.component';
// feature-part
import { IdeaModule } from './idea/idea.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IdeaModule.forRoot()
  ],
  declarations: [TopicComponent]
})
export class TopicModule { }
