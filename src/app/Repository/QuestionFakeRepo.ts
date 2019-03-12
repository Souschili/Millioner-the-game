import { Answear } from '../models/Answear';
import { GameQuestion } from '../models/GameQuestion';

export class QuestionFakeRepository {

  // вопросы для игры
  private setOfQuestions: Array<GameQuestion> = [new GameQuestion ('What is the main answear in the univerce ?',
                                        [new Answear('13'), new Answear('42', true), new Answear('55'), new Answear('99')]),
                                        new GameQuestion ('Chaos or Imperator ? ?',
                                        [new Answear('I don\'t know..'), new Answear('Imperor'),
                                         new Answear('Chaos', true), new Answear('Orcks...WAAAGHH !!')]),
                                        new GameQuestion ('What is type of variable true/false ?',
                                        [new Answear('integer'), new Answear('string'), new Answear('boolean', true), new Answear('any')]),
                                        new GameQuestion ('What is the pi ?',
                                        [new Answear('over 9000'), new Answear('3.14', true),
                                        new Answear('cat'), new Answear('city in Africa')])
                                      ];

// возвращаем сет вопросов из репозитория
getQuestion(): Array<GameQuestion> {
  return this.setOfQuestions;
}



}
