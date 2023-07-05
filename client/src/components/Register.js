import React from "react";

export default function Register() {
  return (
    <div className="mt-3">
     <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary mt-3">Register</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
