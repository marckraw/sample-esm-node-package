import { whatever1, whatever2 } from './sample.js'
import { Square } from './Square.js'

const something = 'some variable'
console.log(something)

console.log(whatever1())
console.log(whatever2())


const square = new Square("Marcin")
square.hello()

import('./modules/myModule.js')
    .then((module) => {
      console.log(module.syncFunction())
      module.asyncFunction().then(res => console.log("dupsko, ", res))
    });