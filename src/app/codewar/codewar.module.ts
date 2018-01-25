import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

// private shared service

import { CodewarComponent } from './codewar.component';
import { XocompareComponent } from './xocompare/xocompare.component';
import { SquaredmirrorComponent } from './squaredmirror/squaredmirror.component';
import { PincodeComponent } from './pincode/pincode.component';
import { LongestComponent } from './longest/longest.component';
import { AveragesComponent } from './averages/averages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  declarations: [
    CodewarComponent,
    XocompareComponent,
    SquaredmirrorComponent,
    PincodeComponent,
    LongestComponent,
    AveragesComponent]
})
export class CodewarModule { }
