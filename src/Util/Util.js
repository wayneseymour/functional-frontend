import Inferno from 'inferno'

export const renderer = node => component =>
  Inferno.render(component, node);

export const el = id => document.getElementById(id)

export const getTargetValue = e => e.target.value;
