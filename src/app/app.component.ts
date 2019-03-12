import { Answear } from './models/Answear';
import { Component } from '@angular/core';
import { GameQuestion } from './models/GameQuestion';
import { QuestionService } from './services/question-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Millioner';

  scores = 0;
  index = 0;
  isGameStart = false;
  currentSet: Array<GameQuestion>;
  currentQ: GameQuestion;
  isWin = false;

  constructor(private gameService: QuestionService) {
    this.currentSet = gameService.getData();
    this.currentQ = this.currentSet[this.index];
  }

  // началоновой игры
  getStart(): void {
    this.isGameStart = true;
    this.scores = 0;
    this.currentQ = this.currentSet[this.index = 0];
  }

// упрощеный подсчет очков
  addScore() {
    this.scores += 100;
  }

// проверка на коректность
  isTrue(ans: Answear) {
    if (ans.isCorect) {
      this.index++;
      if (this.index === this.currentSet.length) {
        this.addScore();
        this.isWin = true;
        this.isGameStart = false;
      } else if (this.index < this.currentSet.length) {
        this.addScore();
        this.currentQ = this.currentSet[this.index];
      }
    } else {
      this.isGameStart = false;
    }

  }

}
