import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddNewReport() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const details = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: details.newReducer[details.newReducer.length - 1].id + 1,
      name,
      status
    };
    dispatch({ type: "ADD_NEW_REPORT", payload: data });
    navigate(`/dashboard`);
  };

  return (
    <>
      <div className="container shadow">
        <h1 className="display-3 text-center">Add details </h1>
        <div className="row">
          <div className="col-md-6  shadow p-3  text-center">
            <form onSubmit={handleSubmit}>
              <div className="form-group ">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  className="form-control my-2 "
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Status"
                  value={status}
                  className="form-control my-2"
                  onChange={(e) => setStatus(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Add Details"
                  className="btn btn-block btn-dark"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
