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

  isGameStart = false;
  currentSet: Array<GameQuestion>;
  currentQ: GameQuestion;

  constructor(private gameService: QuestionService) {
    this.currentSet = gameService.getData();
    this.currentQ = this.currentSet[0];
    // alert('ok');
  }

  getStart(): void {
    this.isGameStart = true;
  }

  isTrue(ans: Answear) {
    alert(ans.answearText)

  }
}
