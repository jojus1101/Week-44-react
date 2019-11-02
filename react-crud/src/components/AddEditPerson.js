import React, { useState, useEffect } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });
  const newPerson = props.newPerson;
  const startValue = { id: "", age: "", name: "", email: "", gender: "" };
  const { addEditPerson } = props;

  /* Add the required changes to use Reacts "Controlled Component Pattern" 
     to handle inputs related to a person */
     const handleChange = event => {
      const target = event.target;
      const id = target.id;
      const value = target.value;
      setPerson({ ...person, [id]: value });
    };
  const handleSubmit = event => {
    addEditPerson(person);
    setPerson({ ...startValue });
  };

  useEffect(
    () =>
      setPerson({
        ...newPerson
      }),
    [newPerson]
  );

  return (
    <div>
      <form className="form-horizontal" onChange={handleChange} onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              value={person.name}
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              value={person.age}
              placeholder="Enter age"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              value={person.email}
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              value={person.gender}
              placeholder="Enter Gender"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>Please provide me with the ability to create new persons</p>
      <p>And update the backend when submitted</p>
      <p> {JSON.stringify(person)}</p>
    </div>
  );
}
