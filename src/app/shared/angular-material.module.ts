import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [MatInputModule, MatExpansionModule],
    exports: [MatInputModule, MatExpansionModule]
})
export class AngularMaterialModule { }
