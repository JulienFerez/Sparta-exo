import React from "react";

const Form = () => {
  const [space, setSpace] = React.useState(false);

  function validateInput(value) {
    value.includes(" ") ? setSpace(!space) : null;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">First Name</label>
        <input
          onChange={(event) => validateInput(event.target.value)}
          type="text"
          className="form-control"
          id="exampleFirstName"
        />
        <small id="FirstName Help" className="form-text text-muted"></small>
        {space ? "No Spaces Allowed" : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
