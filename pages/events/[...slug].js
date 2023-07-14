import React from "react";
import { getFilteredEvents } from "@/helpers/api-util";
import { useRouter } from "next/router";
import EventList from "../../components/EventList";

function FilteredEventsPage(props) {
  const router = useRouter();
  const yearmonth = router.query.slug;


  const events = props.events;
  // const filteredYear = yearmonth[0];
  // const filteredMonth = yearmonth[1];

  // const parsedYear = parseInt(filteredYear);
  // const parsedMonth = parseInt(filteredMonth);

  // const events = getFilteredEvents({
  //   year: parsedYear,
  //   month: parsedMonth,
  // });

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

export async function getServerSideProps(context){
  const { params } = context;

  const yearmonth = params.slug;  
  const filteredYear = yearmonth[0];
  const filteredMonth = yearmonth[1];

  const parsedYear = parseInt(filteredYear);
  const parsedMonth = parseInt(filteredMonth);

  const filteredEvents = await getFilteredEvents({
    year: parsedYear,
    month: parsedMonth,
  });


return{
  props:{
    events: filteredEvents
  }
}

}

export default FilteredEventsPage;
