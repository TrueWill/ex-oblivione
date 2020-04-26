import deepFreeze from 'deep-freeze';
import reducer, { setPriority } from './attributes';
import initialState from './initialState';

it('should initialize', () => {
  const action = { type: '@@INIT' };

  const nextState = reducer(undefined, action);

  expect(nextState).toBe(initialState.character.attributes);
});

it('should set priority', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          dots: 1,
        },
        dexterity: {
          dots: 1,
        },
        stamina: {
          dots: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          dots: 1,
        },
        manipulation: {
          dots: 1,
        },
        appearance: {
          dots: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          dots: 1,
        },
        intelligence: {
          dots: 1,
        },
        wits: {
          dots: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = setPriority({ category: 'mental', priority: 1 });

  const nextState = reducer(state, action);

  // TODO Working - need to change other values
  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          dots: 1,
        },
        dexterity: {
          dots: 1,
        },
        stamina: {
          dots: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          dots: 1,
        },
        manipulation: {
          dots: 1,
        },
        appearance: {
          dots: 1,
        },
      },
    },
    mental: {
      priority: 1,
      traits: {
        perception: {
          dots: 1,
        },
        intelligence: {
          dots: 1,
        },
        wits: {
          dots: 1,
        },
      },
    },
  });
});
