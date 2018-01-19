import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatProgressBarModule],
  exports: [MatToolbarModule, MatCardModule, MatProgressBarModule]
})
export class MaterialModule { }
