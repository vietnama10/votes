import React, { Fragment } from 'react';
import VoteItem from './VoteItem';

const VoteList = ({votes}) => {
  votes = votes.slice(0, 10);
  const voteList = votes.map((vote) => {
    return (
        <VoteItem 
          vote={vote} key={vote.id} 
        />
    )
  })

  return (
    <Fragment>
      <div className="row vote-list">
        {voteList}
      </div>
    </Fragment>
  )
}

export default VoteList; 