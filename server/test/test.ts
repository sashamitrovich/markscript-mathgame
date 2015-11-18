import {Runtime} from 'markscript-koa'
import {guesses} from '../example/data.ts'

export function test(runtime: Runtime) {
  let todoService = <Todo.TodoService>runtime.getService('todo');

  return todoService.getRandomNumbersPair().then(function(results) {
    console.log('Got a pair of random numbers:')
    console.log(JSON.stringify(results))
    return
  })
}
