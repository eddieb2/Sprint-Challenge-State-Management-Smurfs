import React from "react";

const Smurf = props => {
  console.log("props", props);
  return (
    <div key={Date.now()}>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.height}</li>
      </ul>
    </div>
  );
};

export default Smurf;
