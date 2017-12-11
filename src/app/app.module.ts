import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';

// Services
import { WikiService } from 'app/services/wiki/wiki.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    WikiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
