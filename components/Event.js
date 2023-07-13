import Link from "next/link";
import React from "react";
import classes from "./Event.module.css";
import Button from "./Button";
import Icon from "./Icon";
import { useState } from 'react'

function Event(props) {
  const { title, image, date, location, id, description} = props;
  const hideButton = props.hideMyButton;

  const humanDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`;

  const [showButton, setShowButton] = useState(true);

  function toggleButton(){
      setShowButton(false);
  }
  return (
      <>
     
      <div className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>

        <div className={classes.summary}>
          <h2>{title}</h2>
          
          <div className={classes.date}>
            <time>{humanDate}</time>
          </div>
          <div className={classes.address}>
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
            {!hideButton && 
          <Button className={classes.button} style={{color:"black"}} onClick={toggleButton} link={exploreLink}>
              <span>  <Icon/></span>
         EXPLORE EVENT</Button>
}
        </div>
        </div>
        </div>
        <p className={classes.desc}>{description}</p>
      </>
  );
}

export default Event
