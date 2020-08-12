import React, {useReducer} from 'react';

const AdditionalFeature = props => {

  console.log('inside additionalfeature file', props.feature.name, props.addAction)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}


      <button className="button" onClick={() => props.addAction(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
