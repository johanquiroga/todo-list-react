import React from 'react';

const FetchError = ({ message, onRetry }) => (
  <div>
    <p>Could not process request. {message}</p>
    <button onClick={onRetry}>Retry</button>
  </div>
);

export default FetchError;
