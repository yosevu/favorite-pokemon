/* eslint-disable functional/no-let */

function pad(n, length) {
  let len = length - (''+n).length;
  return (len > 0 ? new Array(++len).join('0') : '') + n
}

async function getMonsterList(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data.results
}

async function getMonsters(url) {
  const monsterList = await getMonsterList(url);

  const monsters = await Promise.all(monsterList.map(async (monster) => {
    const response = await fetch(monster.url)
    const data = response.json()
    return data
  }));

  const monsterArray = monsters.map(monster => {
    return {
      name: monster.name,
      liked: false,
      index: pad(monster.id, 3),
      type: monster.types
    }
  });

  return monsterArray 
}

export {
  getMonsters
};
