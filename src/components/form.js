import React, { useState } from 'react';

function Form() {
  let [InputValue, Value] = useState('')

  let handleChange = (event) => {
    Value(event.target.value)
  };

  let Submit = (event) => {
    console.log(InputValue)
  };
}

return Form (
  <form Enter={Submit}>
      <input value={InputValue} onChange={handleChange} />
    <button type="submit">Enter</button>
    event.preventDefault();
  </form>
);

export default Form