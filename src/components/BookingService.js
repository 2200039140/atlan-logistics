import React, { useState } from 'react';

const BookingService = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [cost, setCost] = useState('');

  const handleBooking = () => {
    // Submit booking details logic
    console.log({ pickup, dropoff, vehicle, cost });
  };

  return (
    <div>
      <h2>Book a Vehicle</h2>
      <form>
        <div>
          <label>Pickup Location:</label>
          <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} />
        </div>
        <div>
          <label>Dropoff Location:</label>
          <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <input type="text" value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
        </div>
        <div>
          <label>Estimated Cost:</label>
          <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
        </div>
        <button type="button" onClick={handleBooking}>Book Now</button>
      </form>
    </div>
  );
};

export default BookingService;
