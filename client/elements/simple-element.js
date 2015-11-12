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
    document.getElementById("replay").focus();
    //supplying an array of values (in case you have multiple arguments in the uservice method)
    this.notifyPath('guess', [guess]);
  },
  playAgain: function() {
    this.notifyPath('trigger',[]);
    this.hasAnswered=false;
    this.response=null;
    this.value=null
    document.getElementById("edit").$.input.focus();
  },
  ready: function () {
    this.notifyPath('trigger',[]);
    this.response=null;
    document.getElementById("edit").$.input.focus();
  },

  // check if the user pressed the 'enter' to submit their answer
  keyPressed: function(e) {
    if (    0 === e.charCode
      && !this.hasAnswered) {
        this.submitAnswer(e);
      }
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
