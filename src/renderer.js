import { App } from './components'
import { render } from 'uhtml';
import getMonsters from './data';
import { buttonClick } from './buttonClicked';

export const getMonstersAndRender = (renderer) =>
  getMonsters()
  .then(monsters => renderer({
      monsters: monsters.map(monster => ({...monster, liked: false})),
      buttonClick: buttonClick(renderer, { monsters: monsters.map(monster => ({...monster, liked: false})) })
  }))
  .catch(console.log);

export const renderer = (monsters) => render(document.getElementById('app'), App(monsters));
