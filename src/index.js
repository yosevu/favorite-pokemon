import { App } from './components'
import { render } from 'uhtml';
import getMonsters from './data';

getMonsters()
  .then(monsters => {
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

    const buttonClick = (monsters) => (i) => () => {
      render(document.getElementById('app'), App(toggleLike(monsters, i)));
    };

    const click = buttonClick({ monsters: monsters.map(monster => ({...monster, liked: false})) });
    const initMonsters = {
      monsters: monsters.map(monster => ({...monster, liked: false})),
      buttonClick: click
    };

    render(document.getElementById('app'), App(initMonsters));
  })
  .catch(console.log);
