import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-center text-warning mt-3 mb-4">{props.name}</h1>
    </div>
  );
};

export default Header;
