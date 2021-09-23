import React from "react";

import Fade from "react-reveal/Fade";

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center"></div>
        <div className="col-3">{props.children}</div>
      </section>
    </Fade>
  );
}
