import React from "react";
import "./styles.css";

export default function Card({ title, valor, styles, image, onClick }) {
  return (
    <div className="card" style={{ ...styles }} onClick={onClick}>
      <img className="image" src={image} alt={title} />
      <div className="content">
        <p className="title">{title}</p>
        <p className="valor">{valor}</p>
      </div>
    </div>
  );
}
