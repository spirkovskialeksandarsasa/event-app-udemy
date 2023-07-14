import { getAllEvents } from "@/helpers/api-util";
import React from "react";
import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

function EventsPage(props) {
  const hideButton = false;
  const router = useRouter();

  const { allEvents } = props.events;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }
  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      {allEvents && <EventList hideMyButton={hideButton} items={allEvents} />}
    </div>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: { allEvents: events },
    },
    revalidate: 50
  };
}

export default EventsPage;
