import { Injectable } from '@angular/core';
import { QuestionFakeRepository } from '../Repository/QuestionFakeRepo';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  repo: QuestionFakeRepository;

  /*Выдача вопросов из репозитория */
  getData() {
    return this.repo.getQuestion();
  }
  constructor() {
    this.repo = new QuestionFakeRepository();
  }
}
