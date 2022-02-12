import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const details = useSelector((state) => state);

  return (
    <>
      <div className="welcome text-center">
        <h1>Welcome {details.userReducer[0].name} </h1>
        <Link to="/login" className="login btn btn-success">
          Logout
        </Link>
      </div>
      <div className="container text-center">
        <Link to="/addnewreport" className="btn btn-outline-dark my-2">
          Add New Report
        </Link>
        <div>
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Sl.no</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {details.newReducer.map((d, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{d.name}</td>
                    <td>{d.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
