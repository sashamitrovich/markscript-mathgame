var markscript_uservices_1 = require('markscript-uservices');
var TodoService = (function () {
    function TodoService() {
    }
    // Calculates the correct result and checks if the user answered correctly
    TodoService.prototype.getAnswer = function (guess) {
        // Calculate the correct value
        var correctValue = guess.generatedNumberPair.first + guess.generatedNumberPair.second;
        // Instantiate an Todo.Answer object
        var answer = {
            value: correctValue,
            isCorrect: correctValue == guess.guessedValue
        };
        return markscript_uservices_1.resolve(answer);
    };
    // Generates and returns 2 random numbers
    TodoService.prototype.getRandomNumbersPair = function () {
        var numberPair = {
            first: Math.floor((Math.random() * 50)),
            second: Math.floor((Math.random() * 50))
        };
        return markscript_uservices_1.resolve(numberPair);
    };
    return TodoService;
})();
exports.TodoService = TodoService;
