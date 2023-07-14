import React from 'react'
import EventList from '../components/EventList'
import { getFeaturedEvents } from '@/helpers/api-util';
import Head from 'next/head';

function HomePage(props) {
  return (
    
    <div>
      <Head>
        <title>
          Event App
          </title> 
          <meta name="description" content="Find events near you">
            </meta></Head>
      <EventList items={props.events}/></div>
      
  );
}

export async function getStaticProps(){
const featuredEvents = await getFeaturedEvents()

return{
    props:{
      events: featuredEvents,
    },
    revalidate: 1200
}
}
export default HomePage