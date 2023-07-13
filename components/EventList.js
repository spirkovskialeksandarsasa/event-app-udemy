import React from "react";
import Event from "./Event.js";
import classes from './EventList.module.css'


function EventList(props) {
  const { items } = props;
  return (
      <div>
    <ul className={classes.list}>
      {items.map((event) => (
        <li key={event.id}>
          <Event
            id={event.id}
            date={event.date}
            location={event.location}
            title={event.title}
            image={event.image}
          />
        </li>
      ))}
    </ul>

    </div>
  );
}

export default EventList;
