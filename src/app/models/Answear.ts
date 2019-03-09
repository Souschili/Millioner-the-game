/*вспомогательный класс вопрос */

export class Answear {
   answearText: string;
   isCorect: boolean;

   /*статус по умолчанию false так нам придется только указать один раз какой вопрос верный */
   constructor(text: string, corect = false) {
     this.answearText = text;
     this.isCorect = corect;

   }
}
