import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Image, Question } from '../quiz/quiz.component';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  @Input()
  image: Image;

  @Input()
  question: Question;

  answerText = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  get clipPath() {
    let left = this.question.x;
    let top = this.question.y;
    let right = this.image.size.width - left - 200;
	let bottom = this.image.size.height - top - 200;
	return this.sanitizer.bypassSecurityTrustStyle(`inset(${top}px ${right}px ${bottom}px ${left}px)`);
  }

}
