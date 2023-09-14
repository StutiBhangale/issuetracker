import React from "react";
import { useNavigate } from "react-router-dom";
import { getIssues } from "../storage/localstorage";
import "./Issue.css";

const Issue = () => {
  const navigate = useNavigate();
  const issues = getIssues();
  return (
    <div className="container">
      <button className="add-issue-btn" onClick={() => navigate("/")}>
        Add New Issue
      </button>

      {issues.length > 0 ? (
        <table className="issue-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Bug Type</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id} className="table-row">
                <td>{issue.title}</td>
                <td>{issue.description}</td>
                <td>{issue.bugType}</td>
                <td>{issue.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="no-issues">No Issues</h3>
      )}
    </div>
  );
};

export default Issue;
