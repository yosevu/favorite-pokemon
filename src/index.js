import { App } from './components'
import { render } from 'uhtml';

const initialState = {
  monsters: [
    { name: 'bulbasaur', liked: false },
    { name: 'ivysaur', liked: true },
    { name: 'venusaur', liked: false },
  ]
}

render(document.getElementById('app'), App(initialState))
