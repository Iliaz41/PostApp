import React from "react";
import classes from "../input/MyInput.module.css";

const MyInput = (props, ref) => {
  return <input className={classes.myInput} {...props} />;
};

export default MyInput;
