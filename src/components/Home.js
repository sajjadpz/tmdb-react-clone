//Parent component of What's popular section on the Landing page.
import React, { useState } from "react";
import CenteredTabs from "./CenteredTabs";
import ItemSlider from "./ItemSlider";
import Grid from "@material-ui/core/Grid";

export default function Home() {
  const [tabVal, setTablVal] = useState("/movie/popular");

  const getPropsfromChildCallback = (childProps) => {
    setTablVal(childProps);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={5}>
        <CenteredTabs callBackFromParent={getPropsfromChildCallback} />
      </Grid>
      <Grid item xs={12}>
        <ItemSlider val={tabVal} />
      </Grid>
    </Grid>
  );
}
