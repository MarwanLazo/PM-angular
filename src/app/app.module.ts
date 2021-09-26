import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { GroupsComponent } from './components/groups/groups.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ErrorHandlerInterceptor } from './interceptor/error-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    ToolBarComponent,
    ParticipantComponent,
    GroupsComponent,
    MatchesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
