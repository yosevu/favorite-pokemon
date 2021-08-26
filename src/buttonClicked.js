import { render } from 'uhtml';
import { App } from './components';

const toggleLike = (monsters, i) => {
  const newMonsters = { 
    monsters: monsters.monsters.map(
    monster => {
      const thisLike = (i === monster.id-1) ? !monster.liked : monster.liked;
      return {...monster, liked: thisLike}
    }),
  };

  const click = buttonClick(newMonsters);

  return {...newMonsters, buttonClick: click };
};

export const buttonClick = (monsters) => (i) => () => {
  render(document.getElementById('app'), App(toggleLike(monsters, i)));
};
