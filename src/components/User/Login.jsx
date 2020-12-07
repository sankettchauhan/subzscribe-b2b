import { Button, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { validateLogin } from "../../helperFunctions/validators";
import USERS from "../../content/users.json";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      email: "",
      password: "",
      validPassword: true,
      validEmail: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit() {
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    const validator = validateLogin(user);
    const { errors, validEmail, validPassword } = validator;
    this.setState({
      errors: { ...errors },
      validEmail,
      validPassword,
    });
    if (validEmail && validPassword) {
      console.log("valid");
      console.log(USERS);
      USERS.forEach((userData)=>{
        const {email,password}=userData;
        if(email===user.email){
          if(password===user.password){
            // verified
            console.log("verified");
            alert("login successful!!")
          }else{
            console.log("password wrong")
            alert("wrong password!!")
          }
        }else{
          console.log("user not found")
          alert("user not found")
        }
      })
    } else {
      console.log("not valid");
    }
  }
  render() {
    const { email, password, errors, validEmail, validPassword } = this.state;
    return (
      <>
        <Grid item>
          <TextField
            label="Enter email"
            variant="outlined"
            color="primary"
            name="email"
            value={email}
            helperText={errors.email}
            onChange={this.onChange}
            error={!validEmail}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="Enter password"
            variant="outlined"
            type="password"
            color="primary"
            name="password"
            value={password}
            onChange={this.onChange}
            helperText={errors.password}
            error={!validPassword}
            fullWidth
          />
        </Grid>
        <Grid item container justify="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </>
    );
  }
}
