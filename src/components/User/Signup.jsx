import { Button, Grid, TextField } from "@material-ui/core";
import React, { Component } from "react";
import { validateSignup } from "../../helperFunctions/validators";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phoneNo: "",
      valid: {
        email: true,
        password: true,
        confirmPassword: true,
        name: true,
        phoneNo: true,
      },
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
    const { name, email, password, confirmPassword, phoneNo } = this.state;
    const user = {
      name,
      email,
      password,
      confirmPassword,
      phoneNo,
    };
    const validator = validateSignup(user);
    const { errors } = validator;
    const validObj = {
      name: errors.name === undefined,
      email: errors.email === undefined,
      password: errors.password === undefined,
      confirmPassword: errors.confirmPassword === undefined,
      phoneNo: errors.phoneNo === undefined,
    };
    this.setState({
      errors: { ...errors },
      valid: { ...validObj },
    });
    if (Object.keys(errors).length === 0) {
      console.log("verified.");
      console.log(user);
    } else {
      console.log("not verified!!");
    }
  }
  render() {
    const {
      name,
      email,
      password,
      confirmPassword,
      phoneNo,
      errors,
      valid,
    } = this.state;
    return (
      <>
        <Grid item>
          <TextField
            label="Enter name"
            variant="outlined"
            color="primary"
            name="name"
            value={name}
            helperText={errors.name}
            onChange={this.onChange}
            fullWidth
            error={!valid.name}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Enter email"
            variant="outlined"
            color="primary"
            name="email"
            value={email}
            helperText={errors.email}
            onChange={this.onChange}
            fullWidth
            error={!valid.email}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Enter password"
            variant="outlined"
            color="primary"
            name="password"
            value={password}
            helperText={errors.password}
            onChange={this.onChange}
            fullWidth
            error={!valid.password}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Confirm password"
            variant="outlined"
            color="primary"
            name="confirmPassword"
            value={confirmPassword}
            helperText={errors.confirmPassword}
            onChange={this.onChange}
            fullWidth
            error={!valid.confirmPassword}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Enter phoneNo"
            variant="outlined"
            color="primary"
            name="phoneNo"
            value={phoneNo}
            helperText={errors.phoneNo}
            onChange={this.onChange}
            fullWidth
            error={!valid.phoneNo}
          />
        </Grid>
        <Grid item container justify="center">
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleSubmit}
          >
            Signup
          </Button>
        </Grid>
      </>
    );
  }
}
