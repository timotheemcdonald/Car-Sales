import React from 'react';
import {connect} from 'react-redux'
import {removeAction} from '../components/actions/removeAction'

const AddedFeature = props => {


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeAction(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return{
    features: state.car.features
  }
}

const mapDispatchToProps = {removeAction}


export default connect(mapStateToProps, mapDispatchToProps)(AddedFeature);
