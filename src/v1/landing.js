/* eslint-disable import/first */
import React from 'react';

export default function Landing() {
  return (
    <div className="page">
      <div id="container" className="background-transitions">
        <a target="_blank" href={process.env.PUBLIC_URL + "v1/index.html"} >Launch v1</a>
        <br/>
        <a target="_blank" href={process.env.PUBLIC_URL + "v2/index.html"} >Launch v2</a>
        <br />
        New Version under development
      </div>
    </div>
  );
}