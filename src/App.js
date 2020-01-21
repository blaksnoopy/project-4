import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PROJECT-IV</h1>
      </header>
          <div class="container">
              <section id="content">
                  <form action="">
                      <h1>Sign Up Here</h1>
                      <div>
                          <input type="text" placeholder="Username" required="" id="username" />
                      </div>
                      <div>
                          <input type="password" placeholder="Password" required="" id="password" />
                      </div>
                      <div>
                          <input type="submit" value="Log in" />
                          {/* <a href="#">Lost your password?</a>
                          <a href="#">Register</a> */}
                      </div>
                  </form>
              </section>
          </div>
    </div>
  );
}

export default App;
