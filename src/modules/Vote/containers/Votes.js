import React, { Component } from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VoteList from '../components/VoteList';

class Vote extends Component {

  componentWillMount = () => {
    this.props.actions.fetchVotes_Request();
  }
 
  componentDidMount = () => {
  }
  
  render() {
    
    return (  
      <div className="vote-container">
        <VoteList votes={this.props.votes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  votes: state.votes
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps) (Vote);
