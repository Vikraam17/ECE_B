import React from "react";

const Name = (props) => {
  return (
    <div>
      <h1>Name : {props.name}</h1>
      <h1>Last Name : {props.lname}</h1>
      <h1>Phone no : {props.phone}</h1>
    </div>
  );
};

export default Name;
