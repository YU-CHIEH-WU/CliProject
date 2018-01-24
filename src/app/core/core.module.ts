// angular Module
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// core service
import { UserAuthService } from './service/user/user-auth.service';
import { UserDataService } from './service/user/user-data.service';
// core component
import { NavComponent } from './component/nav/nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [NavComponent],
  declarations: [NavComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [UserAuthService, UserDataService]
    };
  }
}
