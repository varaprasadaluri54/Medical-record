import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Link } from "react-router-dom";
import AddNewReport from "./components/AddNewReport";
import "./styles.css";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success py-2">
          <Link to="/" className="navbar-brand ml-5 app">
            Medical dashboard
          </Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addnewreport" element={<AddNewReport />} />
      </Routes>
    </>
  );
}
