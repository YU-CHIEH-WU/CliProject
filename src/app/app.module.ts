import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CodewarComponent } from './codewar/codewar.component';
import { TopicComponent } from './topic/topic.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    CodewarComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
