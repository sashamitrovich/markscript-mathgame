declare module Todo {
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
    guessedValue: number;
    generatedNumberPair: NumberPair;
  }

  interface TodoService {
    getAnswer(guess:Guess): Promise<Answer>
    getRandomNumbersPair(): Promise<NumberPair>
  }
}
