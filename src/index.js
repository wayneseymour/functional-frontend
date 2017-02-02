import Inferno from 'inferno'
import { el, renderer } from './Util/Util'
import { inc, dec, pipe } from 'ramda'

const render = renderer(el('app'));

const Counter = (count) => (
  <div>
    <button onClick={() => main(inc(count))}>+</button>
    {count}
    <button onClick={() => main(dec(count))}>-</button>
  </div>
)
const main = pipe(Counter, render)
main(0)
