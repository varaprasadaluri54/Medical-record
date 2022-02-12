import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const dat = useSelector((state) => state);
  console.log(dat.userReducer);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    LoginStatus(details);
  };

  const [error, setError] = useState("");
  const navigate = useNavigate();
  function LoginStatus(details) {
    dat.userReducer.map((log) => {
      console.log(log);
      if (details.email === log.email && details.password === log.password) {
        console.log("Logged in");

        const data = {
          id: log.id,
          name: log.name,
          email: log.email,
          password: log.password,
          loggedIn: 1
        };
        console.log(data);
        dispatch({ type: "LOGGEDIN", payload: data });
        navigate(`/dashboard`);
      } else {
        console.log("Details do not match");
        setError("Details do not match");
      }
    });
  }
  return (
    <>
      <div className="container">
        <Form className="col-md-6 shadow mx-auto p-5">
          {error !== "" ? <div className="display-5">{error}</div> : ""}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Submit
          </Button>{" "}
          <Link className="signup btn btn-dark" to="/signup">
            Signup
          </Link>
        </Form>
      </div>
    </>
  );
}
