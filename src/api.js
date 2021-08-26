async function getMonsterList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9')
  const data = await response.json()

  return data.results
}

async function getMonsters() {
  const monsterList = await getMonsterList()

  const monsters = await Promise.all(monsterList.map(async (monster) => {
    const response = await fetch(monster.url)
    const data = response.json()

    return data
  }));

  return monsters
}

export {
  getMonsters
}
