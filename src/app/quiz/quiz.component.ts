import { Component, OnInit } from '@angular/core';

export type ImageId = String;

export type Size = {
  width: number;
  height: number;
}

export type Image = {
  imageId: ImageId;
  description: string;
  size: Size;
}

export type Question = {
  imageId: ImageId;
  x: number;
  y: number;
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  private score = 0;
  private answered = 0;

  private images: Image[] = [
	  { imageId: 'pear.jpg', description: 'Pear', size: { width: 500, height: 700 }},
	  { imageId: 'dog.jpg', description: 'Dog', size: {width: 400, height: 400 }},
	  { imageId: 'lemonparty.jpg', description: 'Lemon party', size: {width: 872, height: 492 }}
  ];

  private questions: Question[];
  private answers: string[];

  constructor() { }

  ngOnInit() {
  	this.reset()
  }

  reset() {
    this.score = 0;
	this.answered = 0;
	this.questions = this.images.map(image => ({
		imageId: image.imageId,
		x: Math.floor(Math.random() * (image.size.width - 150)),
		y: Math.floor(Math.random() * (image.size.height - 150))
	}));
	this.answers = [];
  }

  onAnswer(answer: string) {
  	this.answers.push(answer);
	this.answered += 1;
  }

  get currentQuestion(): Question {
	if (this.done) {
		return null;
	}

	return this.questions[this.answered];
  }

  get currentImage(): Image {
	if (this.done) {
		return null;
	}

	return this.images[this.answered];
  }

  get done(): boolean {
    return this.answered >= this.questions.length;
  }

}
