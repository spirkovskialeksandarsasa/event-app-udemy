import React from "react";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/EventList";

function FilteredEventsPage() {
  const router = useRouter();
  const yearmonth = router.query.slug;

  const filteredYear = yearmonth[0];
  const filteredMonth = yearmonth[1];

  const parsedYear = parseInt(filteredYear);
  const parsedMonth = parseInt(filteredMonth);

  const events = getFilteredEvents({
    year: parsedYear,
    month: parsedMonth,
  });

  if (!events || events.length===0 ) {
    return (<div style={{display: "flex", justifyContent: "center", margin:"50px"}}>
      NO EVENTS FOUND
    </div>
    )
  }
  return (
    <div>

      <EventList items={events} />
    </div>
  );
}

export default FilteredEventsPage;
