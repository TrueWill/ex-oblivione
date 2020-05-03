import deepFreeze from 'deep-freeze';
import reducer, {
  setPriority,
  addDot,
  removeDot,
  setSpecialty,
} from './attributes';
import initialState from './initialState';

it('should initialize', () => {
  const action = { type: '@@INIT' };

  const nextState = reducer(undefined, action);

  expect(nextState).toBe(initialState.character.attributes);
});

it('should set priority, swapping values', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = setPriority({ category: 'mental', priority: 1 });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 3,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 1,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});

it('should add dot', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = addDot({ category: 'social', trait: 'manipulation' });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 2,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});

it('should remove dot', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 2,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = removeDot({ category: 'social', trait: 'manipulation' });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});

it('should not remove dot if at 1', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = removeDot({ category: 'social', trait: 'manipulation' });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 1,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});

it('should set specialty', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 4,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = setSpecialty({
    category: 'physical',
    trait: 'dexterity',
    specialty: 'Catlike',
  });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 4,
          specialty: 'Catlike',
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});

it('should not set specialty if below 4', () => {
  const state = {
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 3,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  };

  deepFreeze(state);

  const action = setSpecialty({
    category: 'physical',
    trait: 'dexterity',
    specialty: 'Catlike',
  });

  const nextState = reducer(state, action);

  expect(nextState).toEqual({
    physical: {
      priority: 1,
      traits: {
        strength: {
          rating: 1,
        },
        dexterity: {
          rating: 3,
        },
        stamina: {
          rating: 1,
        },
      },
    },
    social: {
      priority: 2,
      traits: {
        charisma: {
          rating: 1,
        },
        manipulation: {
          rating: 1,
        },
        appearance: {
          rating: 1,
        },
      },
    },
    mental: {
      priority: 3,
      traits: {
        perception: {
          rating: 1,
        },
        intelligence: {
          rating: 1,
        },
        wits: {
          rating: 1,
        },
      },
    },
  });
});
