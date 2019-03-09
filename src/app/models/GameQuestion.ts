import { Answear } from './Answear';

export class GameQuestion {
questionText: string;

/*массив ответов обьекты класса Answear */
answearList: Array<Answear>;

constructor(text: string, answears: Array<Answear>) {
  this.questionText = text;
  this.answearList = answears;
}

}
