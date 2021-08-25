import { render } from 'uhtml'
import { App } from './components'
import { store } from './store'

const init = (state) => {
  render(document.getElementById('app'), App(state))
}

store.subscribe(init)

logGroup(
  `Action: favorite-pokemon/init`,
  [
    () => log('Initial state:'),
    () => table(store.get('monsters'))
  ]
)

init(store.get())
