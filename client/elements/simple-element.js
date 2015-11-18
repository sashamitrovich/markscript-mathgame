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
    hasEnteredName: {
      type: Boolean,
      value: false
    },
    response: String
  },

  // submits the Answer to the backend (call checkAnswer)
  submitAnswer: function () {
    var guess = new Object();
    guess.userName=this.name;
    guess.guessedValue=this.value;
    guess.generatedNumberPair=this.randomNumbersPair;
    this.hasAnswered = true;
    document.getElementById("replay").focus();
    //supplying an array of values (in case you have multiple arguments in the uservice method)
    this.notifyPath('guess', [guess]);
  },
  // triggers the generation of a new NumberPair (calls generatedNumberPair)
  playAgain: function() {
    this.notifyPath('trigger',[]);
    this.hasAnswered=false;
    this.response=null;
    this.value=null
    document.getElementById("edit").$.input.focus();
  },

  // execute when the whole DOM is ready
  ready: function () {
    this.notifyPath('trigger',[]);
    this.response=null;
    document.getElementById("editName").$.input.focus();
  },

  // check if the user pressed the 'enter' to submit their answer
  keyPressed: function(e) {
    console.log("keyPressed");
    if (    0 === e.charCode
      && !this.hasAnswered) {
        this.submitAnswer(e);
      }
    },

    // checks if the user pressed 'enter' to submit their name
    keyPressedName: function(e) {
      console.log("keyPressedName");
      if (   0 === e.charCode
        && !this.hasEnteredName) {
          this.hasEnteredName=true;
          document.getElementById("edit").$.input.focus();
        }
      },
      observers: [
        'onAnswer(answer)'
      ],

      // triggers when the answer has been checked (checkAnswer) and response has been received
      // renders a response to the user based on their answer
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
