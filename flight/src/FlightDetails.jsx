
import React from "react";

function FlightDetails() {
  return (
    <div>
      <h1>Flight Details</h1>

      <h2>Airline: Indigo</h2>

      <p>From: Vijayawada</p>
      <p>To: Hyderabad</p>

      <p>Departure: 6:30 AM</p>
      <p>Arrival: 8:30 AM</p>

      <p>Duration: 2 Hours</p>

      <h2>Ticket Price: ₹2500</h2>

      <button onClick={() => alert("Ticket Booked!")}>
        Book Now
      </button>
    </div>
  );
}

export default FlightDetails;
