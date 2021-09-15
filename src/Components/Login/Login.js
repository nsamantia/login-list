import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = (props) => {
    axios
      .post(`http://dev.rapptrlabs.com/Tests/scripts/user-login.php`, {
        email,
        password,
      })
      .then((res) => {
        console.log('hit');
        console.log(res.data);
        props.history.push('/Landing');
      })
      .catch((err) => console.log(err));
  };

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
              onChange={(e) => setEmail(e.target.value)}
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
          <div>
            <input onClick={() => loginUser()} type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
