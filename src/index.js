import Inferno from 'inferno'
import { pipe, path } from 'ramda'

const el = id => document.getElementById(id);
const renderer = node => component =>
  Inferno.render(component, node);
const render = renderer(el('app'));

const getTargetValue = path(['target', 'value']);

const View = name => (
  <div>
    <input
      placeholder='Type your name'
      onInput={pipe(getTargetValue, main)}
    />
    <div>Hi, {name}</div>
  </div>
);
const main = pipe(View, render);
main('');
