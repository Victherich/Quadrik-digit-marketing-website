// import React, { useEffect } from 'react';

// const Snowfall = () => {
//   useEffect(() => {
//     const snowContainer = document.createElement('div');
//     snowContainer.classList.add('snowfall');
//     document.body.appendChild(snowContainer);

//     const createSnowflake = () => {
//       const snowflake = document.createElement('div');
//       const size = Math.random() * 5 + 5; // Random size between 5px and 10px
//       const position = Math.random() * 100; // Random horizontal position
//       const duration = Math.random() * 5 + 5; // Random fall duration (5–10s)

//       snowflake.classList.add('snowflake');
//       snowflake.style.width = `${size}px`;
//       snowflake.style.height = `${size}px`;
//       snowflake.style.left = `${position}vw`;
//       snowflake.style.animationDuration = `${duration}s`;

//       snowContainer.appendChild(snowflake);

//       // Remove snowflake after animation ends
//       setTimeout(() => {
//         snowContainer.removeChild(snowflake);
//       }, duration * 1000);
//     };

//     // Generate snowflakes at intervals
//     const interval = setInterval(createSnowflake, 200);

//     return () => {
//       clearInterval(interval); // Cleanup on component unmount
//       document.body.removeChild(snowContainer);
//     };
//   }, []);

//   return null;
// };

// export default Snowfall;


import React, { useEffect } from 'react';


const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed
      snowflake.style.opacity = `${Math.random()}`; // Random opacity

      document.body.appendChild(snowflake);

      // Remove the snowflake after it falls
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 100); // Create a snowflake every 100ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return null; // No visible component, just appending snowflakes to the DOM
};

export default Snowfall;

