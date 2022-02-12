import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <h1 className="display-2 my-5 text-center">Welcome admin</h1>
        <div className="display-2 my-5 text-center">
          <Link className="login btn btn-success" to="/login">
            Login
          </Link>{" "}
          <Link className="signup btn btn-primary" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
}
