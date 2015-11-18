declare module MathGame {
  // Put your model definitions and service definitions here
  interface Answer {
    value: number;
    isCorrect: boolean;
  }

  interface NumberPair {
    first: number;
    second: number;
  }

  interface Guess {
    userName: string;
    guessedValue: number;
    generatedNumberPair: NumberPair;
  }

  interface MathService {
    checkAnswer(guess:Guess): Promise<Answer>
    getRandomNumbersPair(): Promise<NumberPair>
  }
}
