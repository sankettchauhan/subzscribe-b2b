import React from 'react'
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Login from "./Login"
import Signup from "./Signup"

const useStyles = makeStyles((theme) => ({
    container: {
      height: "100vh",
      padding: 24,
    },
    paper: {
      padding: "30px 40px",
      width: "70%",
      [theme.breakpoints.up("md")]: {
        padding: "75px 0",
      },
    },
    box: {
      [theme.breakpoints.up("md")]: {
        padding: "0 80px",
      },
    },
  }));
  
const Container = ({type}) => {
  const classes = useStyles();
    return (
        <Grid container>
        <Grid item xs={false} md={2} />
        <Grid
          item
          container
          xs={12}
          md={8}
          justify="center"
          alignItems="center"
          className={classes.container}>
          <Paper className={classes.paper}>
            <Grid
              container
              direction="column"
              spacing={3}
              className={classes.box}>
                  {type==="login"?<Login/>:type==="signup"?<Signup/>:<div/>}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
    
    )
}

export default Container
