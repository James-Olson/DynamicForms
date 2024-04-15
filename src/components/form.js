import React, { useState } from 'react';

function Form() {
  let [InputValue, Value] = useState('')

  let handleChange = (event) => {
    Value(event.target.value)
  };

  let handleSubmit = (event) => {
    console.log(InputValue)
  };
}

export default Form