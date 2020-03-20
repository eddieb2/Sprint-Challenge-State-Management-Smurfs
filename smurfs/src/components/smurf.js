import React from "react";

const Smurf = props => {
  console.log("props", props);
  return (
    <div>
      <h1>Smurf Village:</h1>
      <ul>
        <li>{props.name}</li>
        <li>{props.age}</li>
        <li>{props.height}</li>
      </ul>
    </div>
  );
};

export default Smurf;
