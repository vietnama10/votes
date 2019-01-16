import React from 'react';


const VoteItem = ({ vote, onAddVote, onRemoveVote }) => {
  const addVote_Combine_Animation = (e) => {
    onAddVote();
    let actionNode = e.target.parentNode.parentNode;
    let liNode = e.target.parentNode.parentNode.parentNode.parentNode;
    liNode.classList.add("re-order")
    if(actionNode.classList.contains("add")) {
      actionNode.classList.remove("add")
      actionNode.classList.add("add1");
    } else if(actionNode.classList.contains("add1")) {
      actionNode.classList.remove("add1")
      actionNode.classList.add("add");
    } else {
      actionNode.classList.add("add");
    }
  }
  return (
      <li className="media my-4">
        <img className="mr-3" src={vote.thumbnailUrl} alt={vote.title}></img>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{vote.title}</h5>
          {vote.content}
          <div className="action">
            <a href="#a" className="add" onClick={(e) => addVote_Combine_Animation(e)}><i className="fas fa-caret-up"></i></a>
            <span className="point"><small>{vote.point}</small> <i className="far fa-kiss-wink-heart"></i></span>
            <a href="#a" className="remove" onClick={onRemoveVote}><i className="fas fa-caret-down"></i></a>
          </div>
        </div>
      </li>
  )
}

export default VoteItem;