export const el = id => document.getElementById(id)

export const renderer = node => component =>
  Inferno.render(component, node)
