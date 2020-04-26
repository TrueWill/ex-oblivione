import deepFreeze from 'deep-freeze';
import reducer, { setArchetype } from './basicInfo';
import initialState from './initialState';

it('should initialize', () => {
  const action = { type: '@@INIT' };

  const nextState = reducer(undefined, action);

  expect(nextState).toBe(initialState.character.basicInfo);
});

it('should set archetype', () => {
  const state = {
    archetype: 'old',
  };

  deepFreeze(state);

  const action = setArchetype('new');

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    archetype: 'new',
  });
});
