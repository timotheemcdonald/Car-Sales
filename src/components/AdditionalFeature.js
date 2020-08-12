import React, {useReducer} from 'react';

const AdditionalFeature = props => {


  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}


      <button className="button" onSubmit={props.addAction}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
