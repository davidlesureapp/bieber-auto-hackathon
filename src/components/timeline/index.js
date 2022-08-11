import * as React from "react";

import Event from "./event";

const Timeline = (props) => {
  return (
    <section className="timeline">
      {props.data.map((event) => (
        <Event
          time={event.time}
          date={event.date}
          type={event.type}
          event={event.event}
          name={event.name}
          comment={event.comment}
          new={event.new}
        />
      ))}
    </section>
  );
};
export default Timeline;
