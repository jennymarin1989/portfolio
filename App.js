import React, { Fragment } from 'react';
import Home from '../src/containers/Home'
import AboutMe from '../src/containers/AboutMe'

import '../src/styles/base.scss';

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <section>
          <Home tag="h1" className="homepage" text="Welcome" />
        </section>
        <section>
          <AboutMe tag="h1" className="about-me" text="About me" />
        </section>
      </div>
    </Fragment>
  );
}

export default App;
