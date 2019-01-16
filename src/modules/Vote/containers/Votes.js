import React, { Component } from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VoteList from '../components/VoteList';

class Vote extends Component {

  componentWillMount = () => {
    this.props.actions.fetchVotes_Request();
  } 
  
  render() {
    
    return (  
      <div className="container vote-container">
        <VoteList votes={this.props.votes} actions={this.props.actions} />
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
