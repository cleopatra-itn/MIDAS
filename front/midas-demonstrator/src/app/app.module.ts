import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http" // added new
import { FormsModule } from "@angular/forms" // added new

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamedEntitiesComponent } from './components/named-entities/named-entities.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { EventsComponent } from './components/events/events.component';
import { PredictionComponent } from './components/prediction/prediction.component';

@NgModule({
  declarations: [
    AppComponent,
    NamedEntitiesComponent,
    SentimentAnalysisComponent,
    EventsComponent,
    PredictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Added as the part of import
    FormsModule // Added as the part of import 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
