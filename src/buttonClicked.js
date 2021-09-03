const getNewMonster = (i) => (monster) => {
  const liked = (i === monster.id-1) ? !monster.liked : monster.liked;
  return {...monster, liked};
}

const toggleLike = (renderer, { monsters }, i) => {
  const newMonsters = { monsters: monsters.map(getNewMonster(i)) };
  const click = buttonClick(renderer, newMonsters);
  return {...newMonsters, buttonClick: click };
};

export const buttonClick = (renderer, monsters) => (i) =>
  () => renderer(toggleLike(renderer, monsters, i));
