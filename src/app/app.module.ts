import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


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
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    WikiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
