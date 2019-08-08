import React from "react";
import PropTypes from "prop-types";

function Counter({ count, handleIncrement }) {
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired
};

export default Counter;
