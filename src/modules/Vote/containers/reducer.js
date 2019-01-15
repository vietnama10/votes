import * as types from './types';

const initState = [];

const votes = (state = initState, action) =>  {
  switch (action.type) {
    case types.FETCH_VOTES:
      let votes = action.votes;
      state = votes;
      return state;
    default: 
      return state;
  }
}

export default votes;