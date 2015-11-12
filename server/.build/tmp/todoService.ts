import {mlService, mlMethod, resolve, resolveIterator, METHOD} from 'markscript-uservices'


export class TodoService implements Todo.TodoService {

  // Calculates the correct result and checks if the user answered correctly
  
  getAnswer(guess: Todo.Guess ) : Promise<Todo.Answer> {
    // Calculate the correct value
    let correctValue = guess.generatedNumberPair.first+guess.generatedNumberPair.second;

    // Instantiate an Todo.Answer object
    let answer: Todo.Answer = {
      value: correctValue,
      isCorrect: correctValue==guess.guessedValue
    }
    return resolve(answer);
  }

  // Generates and returns 2 random numbers
  
  getRandomNumbersPair() : Promise<Todo.NumberPair> {
    let numberPair: Todo.NumberPair = {
      first: Math.floor((Math.random() * 50)),
      second: Math.floor((Math.random() * 50))
    }
    return resolve(numberPair);
  }
}
