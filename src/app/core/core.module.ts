import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';


import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class CoreModule { }
