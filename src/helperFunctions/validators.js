// helper methods
const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};
const isEmail = (email) => {
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegEx.test(email);
};
const isPassword = (pwd) => pwd.length >= 8;
const samePassword = (p1, p2) => p1 === p2;
const isPhoneNo = (phoneNo) => {
  const phoneRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegEx.test(phoneNo);
};
exports.validateSignup = (newUser) => {
  let errors = {};
  if (isEmpty(newUser.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(newUser.email)) {
    errors.email = "Please enter a valid email";
  }
  if (isEmpty(newUser.password)) {
    errors.password = "Must not be empty";
  } else if (!isPassword(newUser.password)) {
    errors.password = "Password should at least be 8 characters long";
  } else if (!samePassword(newUser.password, newUser.confirmPassword)) {
    errors.confirmPassword = "Passwords do not match";
  }
  if (isEmpty(newUser.name)) {
    errors.name = "Must not be empty";
  }
  if (isEmpty(newUser.phoneNo)) {
    errors.phoneNo = "Must not be empty";
  } else if (!isPhoneNo(newUser.phoneNo)) {
    errors.phoneNo = "Please enter a valid phone no.";
  }
  if (isEmpty(newUser.confirmPassword)) {
    errors.confirmPassword = "Must not be empty";
  } else if (!samePassword(newUser.password, newUser.confirmPassword)) {
    errors.confirmPassword = "Passwords dont match";
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0 && errors.constructor === Object,
  };
};

exports.validateLogin = (user) => {
  let errors = {};
  let validEmail = true;
  let validPassword = true;
  if (isEmpty(user.email)) {
    errors.email = "Must not be empty";
    validEmail = false;
  }
  if (!isEmail(user.email)) {
    errors.email = "Please enter a valid email address";
    validEmail = false;
  }
  if (isEmpty(user.password)) {
    errors.password = "Must not be empty";
    validPassword = false;
  }
  return {
    errors,
    validEmail,
    validPassword,
  };
};
