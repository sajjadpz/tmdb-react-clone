import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));

export default function CenteredTabs(props) {
  const classes = useStyles();
  const [tabValue, settabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    let valToLabel = new Map();
    valToLabel[0] = "/movie/popular";
    valToLabel[1] = "/tv/on_the_air";
    valToLabel[2] = "/movie/now_playing";
    valToLabel[3] = "/movie/upcoming";

    props.callBackFromParent(valToLabel[newValue]);
    settabValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Popular" />
          <Tab label="On TV" />
          <Tab label="In Theaters" />
          <Tab label="Upcoming" />
        </Tabs>
      </Paper>
    </div>
  );
}
