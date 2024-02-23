import { useState, useEffect } from "react";

function Test() {
  // State variable to hold whether the screen width is less than or equal to 768px
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Function to update isSmallScreen state variable
  const updateIsSmallScreen = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  // Add event listener when the component mounts to track window resize
  useEffect(() => {
    window.addEventListener("resize", updateIsSmallScreen);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateIsSmallScreen);
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <div>
      <p>Is Small Screen: {isSmallScreen ? "true" : "false"}</p>
    </div>
  );
}

export default Test;
