"use client";

import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>Error: {error.message}</p>
      <div>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
};
export default Error;
