import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser/';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { CodewarModule } from './codewar/codewar.module';
import { TopicModule } from './topic/topic.module';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule,
    TopicModule,
    CodewarModule
  ],
  providers: [HttpModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
