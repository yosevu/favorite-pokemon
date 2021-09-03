/* eslint-disable functional/functional-parameters */

import { html } from 'uhtml';
import { dispatchToggleLike } from './redux/pokemonActions';

const MonsterName = (name) => html`<h2 class="monster__name">${name}</h2>`

const MonsterImage = ({index, name}) => {
  return html`
    <img class="monster__image" src=${`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`} alt="${name}"/>
  `
} 

const MonsterIndex = (index) => {
  return html`
    <div class="monster__index">#${index}</div>
  `
}

const getMonsterLiked = (monster) => html`
<button class="monster__liked" onclick=${() => dispatchToggleLike(monster)}>
  <svg xmlns="http:www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
</button>
`

const getMonsterUnliked = (monster) => html`
<button class="monster__unliked" onclick=${() => dispatchToggleLike(monster)}>
  <svg xmlns="http:www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
`

const MonsterHeart = (monster) => {
  return monster.liked ? getMonsterLiked(monster) : getMonsterUnliked(monster)
}

const MonsterTypes = (types) => {
  return html`
<ul class="monster__types">
  ${types.map(({ type }) => html`<li class="monster__type">${type.name}</li>`)}
</ul>
`;
}

const Monster = (monster) => {
  const { name, type, index } = monster;
  return html`
<li class="monster">
  ${MonsterName(name)}
  ${MonsterTypes(type)}
  ${MonsterImage(monster)}
  ${MonsterIndex(index)}
  ${MonsterHeart(monster)}
</li>
`}

const getSortedMonsters = ({ monsters }) => {
  const sortedMonsters = [...monsters].sort((a, b) => (parseInt(a.index) - parseInt(b.index)));
  return sortedMonsters
}

const Monsters = (sortedMonsters) => html`
<ul class="monsters">
 ${sortedMonsters.map(Monster)}
</ul>
`;

const App = (props) => html`
<div class="monsters__container">
  ${Monsters(getSortedMonsters(props))}
</div>
`

export {
  App,
}