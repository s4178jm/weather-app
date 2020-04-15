import React, { useState } from "react";

function Form(props) {
  //console.log('Form - props', props);

  const [cityTitle, setCityTitle] = useState("");

  const handleChange = e => {
    const temp = e.target.value;
    setCityTitle(temp);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(cityTitle);
    // reset the form
    setCityTitle("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cityTitle">Zip Code</label>
        <input
          id="cityTitle"
          type="text"
          value={cityTitle}
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}

export default Form;
