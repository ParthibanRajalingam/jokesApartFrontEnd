import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  APP_ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SubmitJokeComponent } from './submit-joke/submit-joke.component';
import { JokeComponent } from './joke/joke.component';
import {HhtpCallsService} from './hhtp-calls.service';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    SubmitJokeComponent,
    JokeComponent
  ],
  imports: [RouterModule.forRoot(
      APP_ROUTES
      , { useHash: true }
     ),
    BrowserModule,HttpClientModule
  ],
  providers: [HhtpCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
