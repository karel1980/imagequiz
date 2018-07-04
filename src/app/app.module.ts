import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ImageViewComponent } from './image-view/image-view.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ImageViewComponent,
    QuestionComponent
  ],
  imports: [
	  BrowserModule,
	  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
