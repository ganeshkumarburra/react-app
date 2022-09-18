import React from "react";

export default function Index({ data }) {
  return (
    <span
      style={{
        border: "2px solid black",
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 1,
        marginLeft: 1,
        backgroundColor: "#E0E0E0",
      }}
    >
      {data}
    </span>
  );
}
