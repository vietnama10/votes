import React from 'react';


const VoteItem = ({ vote }) => {
  return (
    <div className="card-container col-sm-3">
      <div className="card vote-item">
        <img 
          className="card-img-top" 
          alt={vote.title} 
          src={vote.thumbnailUrl}>
        </img>
        <img 
          className="img-animation-addtocart" 
          id={"addtocart-" + vote.id} 
          width="0"
          alt={vote.title} 
          src={vote.thumbnailUrl}>
        </img>
        <div className="card-body">
          <h6 className="card-title">{vote.title}</h6>
          <p className="card-text">${vote.price}</p>
          <button className="btn btn-primary card-action">Vote</button>
        </div>
      </div>
    </div>
  )
}

export default VoteItem;