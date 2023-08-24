import React from "react";

function Backdrop({ close }) {
  return <div className="backdrop" onClick={close} />;
}

export default Backdrop;
