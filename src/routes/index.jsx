import { Routes, Route, Navigate } from "react-router-dom";
import RepoExplorer from "../pages/RepoExplorer";
import RepoDetails from "../pages/RepoDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/repo-explorer" />} />
      <Route path="/repo-explorer" element={<RepoExplorer />} />
      <Route
        path="/repository/details/:repositoryId"
        element={<RepoDetails />}
      />
    </Routes>
  );
};

export default AllRoutes;
