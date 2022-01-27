import React from "react";

const Spinner = () => {
  return (
    <div className="px-12">
      <div className="h-12 w-12 mx-auto">
        <span className="animate-spin inline-flex h-full w-full rounded-full bg-blue-200 border-8 border-b-blue-700 opacity-75"></span>
      </div>
    </div>
  );
};

export default Spinner;
