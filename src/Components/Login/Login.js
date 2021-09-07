import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <h1>Rapptr Labs</h1>
      </div>
      <div>
        <form>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="user@rapptrlabs.com"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </label>

          <label>
            Password
            <input
              type="text"
              name="password"
              placeholder="Must be at least 4 characters"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
        </form>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};
export default Login;
