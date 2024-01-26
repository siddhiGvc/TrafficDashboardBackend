

// function SendTime2Machine()
// {
//     var d = new Date();

//     var tempstring = '*TIM,' + d.getDate();
//     tempstring = tempstring + ',' + (d.getMonth() + 1); // Adding 1 to get the month in the usual format
//     tempstring = tempstring + ',' + d.getFullYear(); // Using getFullYear() instead of getYear()
//     tempstring = tempstring + ',' + d.getHours();
//     tempstring = tempstring + ',' + d.getMinutes();
//     tempstring = tempstring + ',' + d.getSeconds() + '#';
//     console.log(tempstring);
//     mqttClient.publish('GVC/VM/' + machineID, tempstring);
// }

// SendTime2Machine();

const currentDate = new Date(); // Current date and time
currentDate.setHours(currentDate.getHours() - 5);
currentDate.setMinutes(currentDate.getMinutes() - 30);

// Ensure that the adjustments don't result in an invalid date
// (e.g., if the adjusted time goes back to the previous day)
if (currentDate < new Date(0)) {
  console.error("Adjustments resulted in an invalid date!");
  // You might want to handle this case accordingly
}

const last_date = new Date('2024-01-23T17:00:00Z'); // Example: a specific date and time

// Calculate the time difference in milliseconds
const timeDifference = currentDate - last_date;

console.log(`Time difference in milliseconds: ${timeDifference}`);
const timeDifferenceInSeconds = timeDifference / 1000;
console.log(`Time difference in seconds: ${timeDifferenceInSeconds}`);
