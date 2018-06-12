import React from 'react';

function InfoBox(props) {
  console.log(props.passData);
  return (
    <div>
      <h2>{ props.passData.id }</h2>
    </div>
  );
}

export default InfoBox;
