import React from 'react';
const commonHeader = () => {
    return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top font-weight-bold">
        <a className="navbar-brand nav-link p-2" href="/">
          <span style={{ color: 'red' }}>A</span>arth<span style={{ color: 'red' }}>N</span>veesh
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars">Menu</i>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-home"></i>&nbsp; Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-info-circle"></i>&nbsp; About Us
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-calendar-alt"></i>&nbsp; Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-trophy"></i>&nbsp; Mutual Fund
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-chart-line"></i>&nbsp; Stock Market
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-newspaper"></i>&nbsp; News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i class="fa-solid fa-mortar-pestle"></i>&nbsp; Screener
              </a>
            </li>
          </ul>
          <ul className="navbar-nav topmenu-login">
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-columns"></i>&nbsp; Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                &nbsp;<i className="fas fa-sign-in-alt"></i>&nbsp; Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="sidenav"></nav>
    </header>
    )
}
export default commonHeader;
