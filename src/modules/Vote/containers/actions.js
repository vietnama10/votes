import * as types from './types';
import { request } from '../../../utils/apiCaller';

export const fetchVotes_Request = () => {
  return dispatch => { request('http://localhost:3000/votes', 'GET').then(votes => {
      dispatch(fetchVotes(votes));
    });
  }
}

export const fetchVotes = (votes) => ({
  type: types.FETCH_VOTES, votes: votes
})

export const addVote = (voteId) => ({
  type: types.VOTE_ADD, voteId: voteId
})

export const removeVote = (voteId) => ({
  type: types.VOTE_REMOVE, voteId: voteId
})