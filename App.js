/**
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>This is h1 title</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      <Title />
      <h1 id='heading'>This is JSX Heading</h1>
    </div>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("root"));

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeadingComponent />);
