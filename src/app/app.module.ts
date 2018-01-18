import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../environments/material.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { CodewarComponent } from './codewar/codewar.component';
import { XocompareComponent } from './codewar/xocompare/xocompare.component';
import { SquaredmirrorComponent } from './codewar/squaredmirror/squaredmirror.component';
import { PincodeComponent } from './codewar/pincode/pincode.component';

import { TopicComponent } from './topic/topic.component';

import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CodewarComponent,
    XocompareComponent,
    SquaredmirrorComponent,
    PincodeComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [HttpModule, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
