import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <span href="#" className="logo">mini.css</span>
          <button id='button'>Docs</button>
<a class='button' href='#'>Get started</a>
<input class='button' type='submit' value='github' />
        {/*<label htmlFor="doc-drawer-checkbox" className="button drawer-toggle hide"></label>*/}
        </header>
        <div className="row" id="doc-wrapper">
          <input type="checkbox" id="doc-drawer-checkbox" />
          <nav>
  <a href="#">Home</a>
  <span>News</span>
  <a href="#" class="sublink-1">New Courses</a>
  <a href="#" class="sublink-1">Certifications</a>
  <span class="sublink-1">Events</span>
  <a href="#" class="sublink-2">Course Showcase - 12th, Dec</a>
  <a href="#" class="sublink-2">Staff AMA - 16th, Dec</a>
  <a href="#" class="sublink-1">Policy Update</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
          <main className="col-sm-12 col-md-8 col-lg-9" id="doc-content">
            <button>Home</button><a href="#" class="button">News</a>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
