import React from 'react';
import css from './AppLayout.css';

let AppLayout = function(props) {
    return (
      <div className="container">
          <div className={css.customContainer}>
              <header>
                  <h2>View Donations Page</h2>
              </header>
              <main>
                  {props.children}
              </main>
              <footer>
                  <div className={css.footerText}>
                      Data Provided By: <a href="http://justgiving.com">JustGiving</a>
                  </div>
              </footer>
          </div>
      </div>
    )
}

export default AppLayout;