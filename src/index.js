import Inferno from 'inferno'
import R from 'ramda'

const el = id => document.getElementById(id)

const renderer = node => component =>
  Inferno.render(component, node)
const render = renderer(el('app'))

const Time = currentDate => (
  <div>Curent date: {`${currentDate}`}</div>
)

const main = R.compose(render, Time)
setInterval(() => main(new Date()), 1000)

