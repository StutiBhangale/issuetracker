import AddIssue from "./components/AddIssue";
import Issue from "./components/Issue";
import { Route, Routes } from "react-router-dom";


export const App = () => {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<AddIssue />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </div>
  );
};
