let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true; 

let runnerAge = 18;

//Checks whether the runner is an adult AND registered early. If true, add 1000 to their race number
if(runnerAge > 18 && registeredEarly) {
  raceNumber = raceNumber + 1000; 
}

//Checks whether the runner is an adult AND registration to determine race time. 
if(runnerAge > 18 && registeredEarly) {
  console.log(`Your race begins at 9:30 am. Your race number is ${raceNumber}.`); 
}
else if(runnerAge > 18 && !registeredEarly) {
  console.log(`Your race begins at 11:00 am. Your race number is ${raceNumber}.`);
}

//Checks for youth registrants and tells them their race begins at 12:30pm. Also checks for runners who are exactly 18 years old.
if(runnerAge < 18) {
  console.log(`Your race begins at 12:30 pm. Your race number is ${raceNumber}.`);
}
else {
  console.log('Please see the registration desk.');
}