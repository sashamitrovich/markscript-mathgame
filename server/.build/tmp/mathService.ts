import {mlService, mlMethod, resolve, resolveIterator, METHOD} from 'markscript-uservices'


export class MathService implements MathGame.MathService {

  // Calculates the correct result and checks if the user answered correctly
  
  checkAnswer(guess: MathGame.Guess ) : Promise<MathGame.Answer> {


    // Calculate the correct value
    let correctValue = guess.generatedNumberPair.first+guess.generatedNumberPair.second;

    // Instantiate an Todo.Answer object
    let answer: MathGame.Answer = {
      value: correctValue,
      isCorrect: correctValue==guess.guessedValue
    }

    //enrich the guess with information about correctness of the answer and store the user's guess in the DB
    var uri="/guess/"+Math.floor((Math.random() * 1000000))+".json";
    guess.isCorrect=answer.isCorrect;
    xdmp.documentInsert(uri, guess);

    return resolve(answer);
  }

  // Generates and returns 2 random numbers
  
  getRandomNumbersPair() : Promise<MathGame.NumberPair> {
    let numberPair: MathGame.NumberPair = {
      first: Math.floor((Math.random() * 50)),
      second: Math.floor((Math.random() * 50))
    }
    return resolve(numberPair);
  }
}
