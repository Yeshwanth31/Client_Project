import React from 'react'

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand" href="#">My Website</a>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Register</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
