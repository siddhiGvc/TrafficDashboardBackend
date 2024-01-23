

function SendTime2Machine()
{
    var d = new Date();

    var tempstring = '*TIM,' + d.getDate();
    tempstring = tempstring + ',' + (d.getMonth() + 1); // Adding 1 to get the month in the usual format
    tempstring = tempstring + ',' + d.getFullYear(); // Using getFullYear() instead of getYear()
    tempstring = tempstring + ',' + d.getHours();
    tempstring = tempstring + ',' + d.getMinutes();
    tempstring = tempstring + ',' + d.getSeconds() + '#';
    console.log(tempstring);
    mqttClient.publish('GVC/VM/' + machineID, tempstring);
}

SendTime2Machine();