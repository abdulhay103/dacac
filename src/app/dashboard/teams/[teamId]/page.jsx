import React from "react";

export default function EditTeam({ params }) {
  let id = parseInt(params.teamId);
  console.log(id);
  return <div>EditTeam Id: {id}</div>;
}
