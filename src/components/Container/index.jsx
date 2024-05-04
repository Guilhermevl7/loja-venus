import React from "react";

export default function Container({ children, styles }) {
  return (
    <body
      style={{
        display: "flex",
        backgroundColor: "rgb(235, 209, 209)",
        height: "100%",
        margin: "auto",
        width: "100%",
      }}
    >
      <div
        style={{
          padding: "25px",
          margin: "25px",
          color: "black",
          width: "100%",
          ...styles,
        }}
      >
        {children}
      </div>
    </body>
  );
}
