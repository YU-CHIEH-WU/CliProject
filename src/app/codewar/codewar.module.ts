import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodewarRoutingModule } from './codewar-routing.module';

import { CodewarComponent } from './codewar.component';
import { XocompareComponent } from './xocompare/xocompare.component';
import { SquaredmirrorComponent } from './squaredmirror/squaredmirror.component';
import { PincodeComponent } from './pincode/pincode.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodewarRoutingModule
  ],
  exports: [
    CodewarComponent,
    XocompareComponent,
    SquaredmirrorComponent,
    PincodeComponent,
  ],
  declarations: [
    CodewarComponent,
    XocompareComponent,
    SquaredmirrorComponent,
    PincodeComponent]
})
export class CodewarModule { }
