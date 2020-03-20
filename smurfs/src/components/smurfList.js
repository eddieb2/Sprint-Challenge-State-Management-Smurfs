import React, { useState, useEffect } from "react";
import Smurf from "./smurf";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import { getData } from "../actions/smurfActions";
import smurfForm from "./smurfForm";

const smurfList = props => {
  const clickHandler = e => {
    props.getData();
  };

  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf
          name={smurf.name}
          height={smurf.height}
          age={smurf.age}
          key={Date.now()}
        />
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={clickHandler}
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

export default connect(mapStateToProps, { getData })(smurfList);
