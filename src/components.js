import { html } from 'uhtml';

const MonsterHeart = (liked) => {
  if (liked) {
    return html`
    <button class="monster__liked">
      <svg xmlns="http:www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg>
    </button>
    `
  }

  return html`
  <button class="monster__unliked">
    <svg xmlns="http:www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </button>
  `
}

const MonsterTypes = () => html`
<ul class="monster__types">
  <li class="monster__type">grass</li>
  <li class="monster__type">poison</li>
</ul>
`

const Monster = ({ liked }) => html`
<li class="monster">
  <h2 class="monster__name">Bulbasaur</h2>

  ${MonsterTypes()}

  <img class="monster__image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur"/>

  <div class="monster__index">#001</div>

  ${MonsterHeart(liked)}
</li>
`

const Monsters = ({ monsters }) => html`
<ul class="monsters">
 ${Monster(monsters[0])}
 ${Monster(monsters[1])}
 ${Monster(monsters[2])}
 ${Monster(monsters[0])}
 ${Monster(monsters[1])}
 ${Monster(monsters[2])}
</ul>
`

const App = (props) => html`
<div class="monsters__container">
  ${Monsters(props)}
</div>
`

export {
  App,
}
