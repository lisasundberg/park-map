import React from 'react';
import Event from './Event';

function Events(){
  return(
    <div className="events">
      <h3>Events</h3>
      <ul>
        <Event />
        <Event />
        <Event />
        {/* <button className="show-more">Visa mer...</button> */}
      </ul>
    </div>
  );
}

export default Events;
