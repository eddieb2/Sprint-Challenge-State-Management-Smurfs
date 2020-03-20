import React from "react";
import { Button, TextField } from "@material-ui/core";

const smurfForm = () => {
  return (
    <form action="">
      <TextField type="text" variant="outlined" />
      <TextField type="text" variant="outlined" />
      <TextField type="text" variant="outlined" />
      <Button type="submit" variant="contained" color="primary">
        Add Smurf!
      </Button>
    </form>
  );
};

export default smurfForm;
