import { App } from './components'
import { render } from 'uhtml';
import getMonsters from './data';

getMonsters()
  .then(monsters => {
    console.log(monsters);
    render(document.getElementById('app'), App(
      { monsters: monsters.map(monster => ({...monster, liked: false}))}
    ));
  })
  .catch(console.log);
