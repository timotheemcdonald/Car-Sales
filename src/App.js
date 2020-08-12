import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import {reducer, initialState} from './components/reducers/index'
import {ADD_ACTION, addAction} from './components/actions/addAction'
import {REMOVE_ACTION, removeAction} from './components/actions/removeAction'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addAction = item => {
    return props.add(item)
  }

  const removeAction = item => {
    return props.remove(item)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeAction={removeAction} />
      </div>
      <div className="box">
        <AdditionalFeatures car={state.car} additionalFeatures={state.additionalFeatures} addAction={addAction} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    state
  }
}

const mapDispatchToProps = {
  add: addAction,
  remove: removeAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App);