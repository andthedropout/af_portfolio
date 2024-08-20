import React from "react";

export default function Project(props) {
  return (
    <div className="Project">
      <div className="front">
        {props.data.logo ? (
          <img src={props.data.logo} alt="Logo" />
        ) : (
          props.data.name
        )}
      </div>
      <div className="back">
        <div>
          <p style={{fontWeight:"bold"}}>{props.data.beschreibung}</p>
          <p>{props.data.date}</p>
          {props.data.demo && (
            <a target="_blank" rel="noopener noreferrer" href={props.data.demo}>
              Go
            </a>
          )}
          {props.data.dropout1 && (
            <a target="_blank" rel="noopener noreferrer" href={props.data.dropout1}>
              Demo 1
            </a>
          )}
          {props.data.dropout2 && (
            <a target="_blank" rel="noopener noreferrer" href={props.data.dropout2}>
              Demo 2
            </a>
          )}
          {props.data.dropout3 && (
            <a target="_blank" rel="noopener noreferrer" href={props.data.dropout3}>
              Demo 3
            </a>
          )}
          {props.data.github && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.github}
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
