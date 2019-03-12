import { Answear } from './../../models/Answear';
import { GameQuestion } from './../../models/GameQuestion';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
@Input()
question: GameQuestion;
@Output()
answearClick = new EventEmitter<Answear>();

  constructor() { }

  isOk(ans: Answear): void {
    alert(ans.answearText);

    this.answearClick.emit(ans)

  }

  ngOnInit() {
  }

}
