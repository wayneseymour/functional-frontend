import Inferno from 'inferno'
import { pipe } from 'ramda'
import { el, renderer, getTargetValue } from './Util/Util'

const View = name => (
  <div>
    <input
      placeholder='Type your name'
      onInput={pipe(getTargetValue, main)}
    />
    <div>Hi, {name}</div>
  </div>
);

const main = pipe(View, renderer(el('app')));
main('');
