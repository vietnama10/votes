import * as types from './types';

const initVotes = [];

const votes = (state = initVotes, action) =>  {
  switch (action.type) {
    case types.FETCH_VOTES:
    {
      let votes = orderVotes(action.votes);
      state = votes;
      return state;
    }
    case types.VOTE_ADD:
    {
      let votes = addVote(action.voteId, state);
      state = votes;
      return [...state];
    }
    case types.VOTE_REMOVE:
    {
      let votes = removeVote(action.voteId, state);
      state = votes;
      return [...state];
    }
    default: 
      return state;
  }
}

const orderVotes = (votes) => {
  return votes.sort( (obj1, obj2) => {
    return obj1.point - obj2.point;
  });
}

const addVote = (voteId, votes) => {
  votes.forEach((vote, index) => {
    if(vote.id === voteId) {
      votes[index].point += 1;
    }
  })
  return orderVotes(votes);
}

const removeVote = (voteId, votes) => {
  votes.forEach((vote, index) => {
    if(vote.id === voteId) {
      votes[index].point -= 1;
    }
  })
  return orderVotes(votes);
}

export default votes;