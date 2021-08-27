const toggleLike = (renderer, monsters, i) => {
  const newMonsters = { 
    monsters: monsters.monsters.map(
    monster => {
      const thisLike = (i === monster.id-1) ? !monster.liked : monster.liked;
      return {...monster, liked: thisLike}
    }),
  };

  const click = buttonClick(renderer, newMonsters);

  return {...newMonsters, buttonClick: click };
};

export const buttonClick = (renderer, monsters) => (i) =>
  () => renderer(toggleLike(renderer, monsters, i));
