import { getEventById, getAllEvents, getFeaturedEvents } from "@/helpers/api-util";
import React from "react";
import Event from "@/components/Event";
import { useRouter } from "next/router";
import classes from './[eventId].module.css'


function EventDetailsPage(props) {


  const event = props.selectedEvent;

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

export async function getStaticProps(context){
  const eventId = context.params.eventId;

 const event =  await getEventById(eventId);

 return {
  props:{
    selectedEvent: event
  },
  revalidate: 15
 };

}

export async function getStaticPaths(){

  const events = await getFeaturedEvents();

  const paths = events.map(event => ({params: {eventId: event.id}}));
  return {
    paths: paths,
    fallback:'blocking',
  };
}
export default EventDetailsPage;
