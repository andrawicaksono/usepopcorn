import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test({ defaultRating = 0 }) {
  const [movieRating, setMovieRating] = useState(defaultRating);

  function handleSetRating(rating) {
    setMovieRating(rating);
  }

  return (
    <div>
      <StarRating maxRating={10} color="blue" onSetRating={handleSetRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" defaultRating={3} size={24} />
    <Test />
  </React.StrictMode>
);
