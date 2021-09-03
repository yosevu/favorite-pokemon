import { html } from 'uhtml';

const likedHeart = (onClick) => html`
<button class="monster__liked" onClick="${onClick}">
  <svg xmlns="http:www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
  </svg>
</button>
`;

const unlikedHeart = (onClick) => html`
<button class="monster__unliked" onClick="${onClick}">
  <svg xmlns="http:www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
</button>
`;

const properNounCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const MonsterName = (monster) => html`
<h2 class="monster__name">${properNounCase(monster.name)}</h2>
`;

const MonsterType = (type) => html`
<li class="monster__type">${type.type.name}</li>
`;

const MonsterTypes = (monster) => html`
<ul class="monster__types">
  ${monster.types.map(MonsterType)}
</ul>
`;

const MonsterPicture = (monster) => html`
<img 
  class="monster__image" 
  src=${`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${monster.id}.png`}
  alt="Bulbasaur"/>
`;

const MonsterHeart = (monster, onClick) => (monster.liked) ?  likedHeart(onClick) : unlikedHeart(onClick);

const MonsterIndex = (monster) => html`
<div class="monster__index">#00${monster.id}</div>
`;

const Monster = (monster, buttonClick) => html`
<li class="monster">
  ${MonsterName(monster)}
  ${MonsterTypes(monster)}
  ${MonsterPicture(monster)}
  ${MonsterIndex(monster)}
  ${MonsterHeart(monster, buttonClick(monster.id-1))}
</li>
`;

const Monsters = ({ monsters, buttonClick }) => html`
<ul class="monsters">
 ${ monsters.map((monster) => Monster(monster, buttonClick))}
</ul>
`;

const App = (props) => html`
<div class="monsters__container">
  ${Monsters(props)}
</div>
`;

export {
  App,
};
