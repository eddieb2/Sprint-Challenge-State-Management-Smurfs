import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { postData } from "../actions/smurfActions";

const SmurfsForm = props => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

  //handle changes
  const handleChange = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  //handle submit
  const handleSubmit = event => {
    event.preventDefault();
    props.postData(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: ""
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="name"
          onChange={handleChange}
          value={newSmurf.name}
          variant="outlined"
          label="name"
        />

        <TextField
          type="text"
          name="age"
          onChange={handleChange}
          value={newSmurf.age}
          variant="outlined"
          label="age"
        />

        <TextField
          type="text"
          name="height"
          onChange={handleChange}
          value={newSmurf.height}
          variant="outlined"
          label="height"
        />

        <Button type="submit" variant="outlined" color="secondary">
          Add Smurf!
        </Button>
      </form>
    </div>
  );
};

export default connect(null, { postData })(SmurfsForm);
