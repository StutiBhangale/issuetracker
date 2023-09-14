export const getIssues = () => {
  if (!localStorage["issues"]) {
    localStorage["issues"] = "[]";
  }

  let issues = localStorage["issues"];
  issues = JSON.parse(issues);
  return issues;
};

export const addIssue = (issue) => {
  const issues = getIssues();
  issues.push(issue);
  localStorage["issues"] = JSON.stringify(issues);
};

export const getIssueById = (id) => {
  const issues = getIssues();
  const issue = issues.find((issue) => issue.id === id);
  return issue;
};
