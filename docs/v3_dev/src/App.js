import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header><label htmlFor="doc-drawer-checkbox" className="button drawer-toggle hide"></label></header>
        <div className="row" id="doc-wrapper">
          <input type="checkbox" id="doc-drawer-checkbox" />
          <nav className="drawer col-md-4 col-lg-3" id="doc-drawer">
            <label htmlFor="doc-drawer-checkbox" className="button drawer-toggle close"></label>
          </nav>
          <main className="col-sm-12 col-md-8 col-lg-9" id="doc-content">
          </main>
        </div>
      </div>
    );
  }
}

export default App;
