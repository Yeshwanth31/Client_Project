import React from "react";

export default function LoginForm() {
  return (
    <div className="mt-3">
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary mt-3">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
