// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    console.log("Function called with:", someValue);
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }
  
  function distanceFromHqInFeet(someValue){
   const headquarters = 42;
   const blocks = Math.abs(someValue - headquarters);
   return blocks * 264;
  }

  function  distanceTravelledInFeet(someValue){
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
  }

  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start); 
    return blocksTravelled * 264; 
  }

  function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264; // Convert blocks to feet
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // $0.02 per foot after 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for this range
    } else {
      return "cannot travel that far"; // Beyond 2500 feet is not allowed
    }
  }
  