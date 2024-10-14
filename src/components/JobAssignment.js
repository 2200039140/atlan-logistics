import React from 'react';

const JobAssignment = () => {
  const handleAcceptJob = () => {
    // Logic to accept the job and see pickup/dropoff locations
    console.log('Job accepted');
  };

  return (
    <div>
      <h2>Job Assignment</h2>
      <button onClick={handleAcceptJob}>Accept Job</button>
      {/* Display job details like pickup/dropoff */}
    </div>
  );
};

export default JobAssignment;
