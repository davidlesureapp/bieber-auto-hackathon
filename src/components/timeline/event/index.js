import React, { useState, useEffect } from "react";

const Event = (props) => {
  return (
    <div key={props.key} className={`timeline__event`}>
      <div className="timeline__timestamp">
        <div className="timeline__time">{props.time}</div>
        <div className="timeline__date">{props.date}</div>
      </div>
      <div className="timeline__info">
        <div className={`timeline__type ${props.type}`}>{props.event}</div>
        <div className="timeline__name">{props.name}</div>
        <div className="timeline__comment">{props.comment}</div>
      </div>
    </div>
  );
};
export default Event;
