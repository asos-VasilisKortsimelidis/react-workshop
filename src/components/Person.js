import React from "react";

function Person(props) {
  return (
    <div>
      ​ My name is {props.name} and I'm {props.age} old​
      {props.children && <p>{props.children}</p>}
    </div>
  );
}

export default Person;
