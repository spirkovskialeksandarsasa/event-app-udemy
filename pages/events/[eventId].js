import { getEventById } from "@/dummy-data";
import React from "react";
import Event from "@/components/Event";
import { useRouter } from "next/router";
import classes from './[eventId].module.css'

function EventDetailsPage(props) {
  const router = useRouter();
  const eId = router.query.eventId;

  const event = getEventById(eId);

  const hideButton = true;

  console.log(event);
  {if (!event) {
    return "NO EVENT FOUND!";
  }}

  return (
    <div>
      <Event
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
        description={event.description}
        hideMyButton = {hideButton}
      />
    </div>
  );
}

export default EventDetailsPage;
