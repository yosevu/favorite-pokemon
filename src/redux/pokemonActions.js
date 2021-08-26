/* eslint-disable functional/no-expression-statement */

import { getMonsters } from '../data';
import { store } from './store';
import { render } from 'uhtml';
import { App } from '../components';

export const dispatchGetMonsters = async (url) => {
    const monsters = await getMonsters(url);
    store.dispatch({
      type: 'GET_MONSTERS',
      payload: monsters
    });
};

export const dispatchToggleLike = async (monster) => {
  store.dispatch({
      type: 'TOGGLE_LIKE',
      name: monster.name,
      payload: { ...monster, liked: monster.liked ? false : true }
  })
  render(document.getElementById('app'), App(store.getState()));
}