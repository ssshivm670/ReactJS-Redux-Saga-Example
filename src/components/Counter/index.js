import { Button, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { next } from "../../redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const handleNext = () => {
    console.log("button pressed redux begin");
    dispatch(next());
  };
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <Grid container spacing={2} xs={12} justify="center" alignItems="center">
      <Grid item>
        <Button onClick={handleNext} variant="contained">
          +
        </Button>
      </Grid>
      {/* <Grid item>
        <Button onClick={handleDecrement} variant="contained">
          -
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default Counter;
