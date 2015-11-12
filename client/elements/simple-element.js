Polymer({
  is: "simple-element",
  properties: {
    value: Number,
    randomNumbersPair: Object,
    answer: Object,
    hasAnswered: {
      type: Boolean,
      value: false
    },
    response: String
  },
  submitAnswer: function () {
    var guess = new Object();
    guess.guessedValue=this.value;
    guess.generatedNumberPair=this.randomNumbersPair;
    this.hasAnswered = true;

    //supplying an array of values (in case you have multiple arguments in the uservice method)
    this.notifyPath('guess', [guess]);
  },
  playAgain: function() {
    this.notifyPath('trigger',[]);
    this.hasAnswered=false;
    this.response=null;
    this.value=null
    this.notifyPath('focus',true);
  },
  ready: function () {
    this.notifyPath('trigger',[]);
  },
  observers: [
    'onAnswer(answer)'
  ],
  onAnswer: function () {
    var response="";
    response=+this.answer.value+" is the correct answer"

    if (this.answer.isCorrect) {
      response="Congrats, "+response+"!";
    }
    else {
      response="Sorry, "+response+" :(";
    }
    this.notifyPath('response', [response]);
  }
});
