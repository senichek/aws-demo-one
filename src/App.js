import './App.css';
import { useState } from 'react';

const msg = "Awesome app!";

function App() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLogged, setIsLogged] = useState(false);

  const login = (usr, pass) => {
    if (usr === "JohnDoe" && pass === "pass111") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }

  const loginForm = () => {
    return (
      <form>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required onChange={(event) => setUsername(event.target.value)}></input>
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required onChange={(event) => setPassword(event.target.value)}></input>
  
      <button type="submit" onClick={() => login(username, password)}>Login</button>
      </form>
    )
  }

  const welcomePage = () => {
    return (<div>You have been logged, {username}!</div>)
  }

  return (
    <div className="App">
      {msg}
      {isLogged}
      {isLogged ? welcomePage() : loginForm()}
    </div>
  );
}

export default App;
