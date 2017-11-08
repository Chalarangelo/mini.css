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
          <nav className="drawer col-md-4 col-lg-3" id="doc-drawer">
            <label htmlFor="doc-drawer-checkbox" className="button drawer-toggle close"></label>
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
