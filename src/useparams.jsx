
import React from "react";
import { useParams } from "react-router-dom";

function Func(){
  const { id } = useParams();

  return (
    <div>
      <h2>Details Page</h2>
      <p>You are viewing details for ID: {id}</p>
    </div>
  );
};

export default Func;
