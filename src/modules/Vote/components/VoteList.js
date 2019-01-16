import React, { Fragment } from 'react';
import VoteItem from './VoteItem';

const VoteList = ({votes, actions}) => {
  votes = votes.slice(0, 10);
  const voteList = votes.map((vote) => {
    return (
        <VoteItem 
          vote={vote} key={vote.id}
          onAddVote={() => actions.addVote(vote.id)} 
          onRemoveVote={() => actions.removeVote(vote.id)}
        />
    )
  })

  return (
    <Fragment>
      <div className="row vote-list">
        <ul className="list-unstyled">
          {voteList}
        </ul>
      </div>
    </Fragment>
  )
}

export default VoteList; 