import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { getData } from "../actions/smurfActions";

const SmurfList = props => {
  // //! First Way
  // const clickHandler = e => {
  //   props.getData();
  // };

  //! Second Way
  useEffect(() => {
    props.getData();
  }, [props.smurfs]);

  return (
    <div>
      <h1>Smurf Village:</h1>
      {props.smurfs.map(smurf => (
        <Smurf
          name={smurf.name}
          height={smurf.height}
          age={smurf.age}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        // onClick={clickHandler}
      >
        Get Village
      </Button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getData })(SmurfList);
