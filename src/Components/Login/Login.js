import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <input
          type="text"
          name="username"
          placeholder="user@rapptrlabs.com"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          name="password"
          placeholder="Must be at least 4 characters"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
    </div>
  );
};
export default Login;
