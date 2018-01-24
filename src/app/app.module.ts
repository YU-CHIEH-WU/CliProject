// angular module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser/';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// core module & routing
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// feature module
import { CodewarModule } from './codewar/codewar.module';
import { TopicModule } from './topic/topic.module';

// shared service
import { MaterializeService } from './shared/service/materialize/materialize.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    CoreModule.forRoot(),
    TopicModule,
    CodewarModule
  ],
  providers: [HttpModule, MaterializeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
