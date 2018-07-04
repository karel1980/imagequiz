import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Image, Question } from '../quiz/quiz.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  image: Image;

  @Input()
  question: Question;

  answerText: string;

  @Output()
  answer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAnswer() {
    this.answer.emit(this.answerText);
	this.answerText = '';
  }

}
