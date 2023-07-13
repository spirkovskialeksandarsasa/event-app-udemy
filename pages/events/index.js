import { getAllEvents } from '@/dummy-data'
import React from 'react'
import EventList from '@/components/EventList'
import EventSearch from '@/components/EventSearch';
import { getFilteredEvents } from '@/dummy-data';
import { useRouter } from 'next/router'
 
function EventsPage() {

    const allEvents = getAllEvents();
    const hideButton = false;
    const router = useRouter();

    function findEventsHandler(year, month){

      const fullPath = `/events/${year}/${month}`;

      router.push(fullPath);


    }
  return (
    <div>
<EventSearch onSearch={findEventsHandler}/>
<EventList hideMyButton={hideButton} items={allEvents}/>

    </div>
  )
}

export default EventsPage