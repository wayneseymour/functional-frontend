import Inferno from 'inferno'
import { pipe } from 'ramda'

const el = id => document.getElementById(id);
const renderer = node => component =>
  Inferno.render(component, node);
const render = renderer(el('app'));

const View = name => (
  <div>
    <input
      placeholder='Type your name'
      onInput={pipe(e => e.target.value, main)}
    />
    <div>Hi, {name}</div>
  </div>
);
const main = pipe(View, render);
main('');
