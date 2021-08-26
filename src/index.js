import { App } from './components'
import { render } from 'uhtml';
import getMonsters from './data';
import { buttonClick } from './buttonClicked';


getMonsters()
  .then(monsters => {
    render(document.getElementById('app'), App({
      monsters: monsters.map(monster => ({...monster, liked: false})),
      buttonClick: buttonClick({ monsters: monsters.map(monster => ({...monster, liked: false})) })
    }));
  })
  .catch(console.log);
