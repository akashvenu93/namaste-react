// ## Namaste React Episode 02 - Igniting your App

/**
 * Features of Parcel
 *
 * 1. Creates Live Server
 * 2. HMR - Hot Module Replacement
 * 3. Minifies the code
 * 4. code bundling
 * 5. tree shaking
 * 6. code caching
 * 7. dev and prod build
 * 8. Image optimization
 *
 * */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is Namaste React Episode 02"
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(heading);
