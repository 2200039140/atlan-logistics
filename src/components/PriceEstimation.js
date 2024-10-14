import React from 'react';

const PriceEstimation = () => {
  return (
    <div>
      <h2>Price Estimation</h2>
      <form>
        <div>
          <label>Pickup Location:</label>
          <input type="text" placeholder="Enter pickup location" />
        </div>
        <div>
          <label>Drop-off Location:</label>
          <input type="text" placeholder="Enter drop-off location" />
        </div>
        <div>
          <label>Type of Vehicle:</label>
          <select>
            <option>Truck</option>
            <option>Van</option>
            <option>Bike</option>
          </select>
        </div>
        <div>
          <button type="submit">Get Estimate</button>
        </div>
      </form>
    </div>
  );
};

export default PriceEstimation;
