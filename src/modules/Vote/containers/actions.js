import * as types from './types';
import { request } from '../../../utils/apiCaller';

export const fetchVotes_Request = () => {
  return dispatch => { request('https://jsonplaceholder.typicode.com/photos', 'GET').then(votes => {
      dispatch(fetchVotes(votes));
    });
  }
}

export const fetchVotes = (votes) => ({
  type: types.FETCH_VOTES, votes: votes
})