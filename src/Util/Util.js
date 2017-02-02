export const el = id => document.getElementById(id)

export const renderer = node => component =>
  Inferno.render(component, node)

export const getTargetValue = e => e.target.value;
