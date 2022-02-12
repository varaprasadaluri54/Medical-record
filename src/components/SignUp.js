import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const dat = useSelector((state) => state);
  console.log(dat.userReducer);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let v = 0;
    dat.userReducer.map((log) => {
      // console.log(log);

      if (log.email === details.email) {
        setError("Already register please login");
        v = 1;
      }
      if (log.email !== details.email && v !== 1) {
        const data = {
          id: dat.userReducer[dat.userReducer.length - 1].id + 1,
          name: details.name,
          email: details.email,
          password: details.password
        };
        dispatch({ type: "ADD_NEW_USER", payload: data });
        setError("Registration sucessfull");
      }
    });
    console.log(dat.userReducer);
  };

  return (
    <>
      <div className="container">
        <Form className="col-md-6 shadow mx-auto p-5" onSubmit={handleSubmit}>
          {error !== "" ? (
            <div>
              {error}
              <Link className="login btn btn-warning" to="/login">
                Login
              </Link>
            </div>
          ) : (
            ""
          )}
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Your name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
              placeholder="Enter Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
