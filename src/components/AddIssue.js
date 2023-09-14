import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addIssue } from "../storage/localstorage";
import uuid from "react-uuid";
import "../App.css";

const AddIssue = () => {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
    bugType: "",
    priority: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputValues.title ||
      !inputValues.description ||
      !inputValues.bugType ||
      !inputValues.priority
    ) {
      alert("All fields are required");
      return;
    }

    addIssue({ id: uuid(), ...inputValues });
    setInputValues({
      title: "",
      description: "",
      bugType: "",
      priority: "",
    });

    navigate("/issue");
  };

  const handlePriorityChange = (event) => {
    setInputValues({
      ...inputValues,
      priority: event.target.value,
    });
  };

  return (
    <>
      <h1>Issue Tracker</h1>
      <div className="add-issue">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              autoComplete="off"
              name="title"
              type="text"
              value={inputValues.title}
              onChange={handleInputChange}
              id="inputValid"
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={inputValues.description}
              onChange={handleInputChange}
              id="inputValid"
            />
          </div>
          <div>
            <label>Type of Bug</label>
            <select
              name="bugType"
              value={inputValues.bugType}
              onChange={handleInputChange}
              id="inputValid"
            >
              <option value="Type"></option>
              <option value="Bug">Bug</option>
              <option value="Feature Request">Feature Request</option>
              <option value="Support Request">Support Request</option>
              <option value="Failure">Failure</option>
            </select>
          </div>
          <div>
            <label>Priority</label>
            <div className="radio-buttons">
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={inputValues.priority === "Low"}
                onChange={handlePriorityChange}
              />
              Low
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={inputValues.priority === "Medium"}
                onChange={handlePriorityChange}
              />
              Medium
              <input
                type="radio"
                name="priority"
                value="High"
                checked={inputValues.priority === "High"}
                onChange={handlePriorityChange}
              />
              High
            </div>
          </div>
          <button type="submit">Add Issue</button>
        </form>
      </div>
    </>
  );
};

export default AddIssue;
