import { App } from './components'
import { render } from 'uhtml';
import { store } from './redux/store';
import { dispatchGetMonsters } from './redux/pokemonActions';

const main = async() => {
  await dispatchGetMonsters('https://pokeapi.co/api/v2/pokemon?limit=9');
  render(document.getElementById('app'), App(store.getState()));  
}

main().catch((error) => {
  console.log(error)
});

