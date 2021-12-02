const getSleepHours = day => {
  if(day === 'monday') {
    return 10;
  }
  else if (day === 'tuesday') {
    return 10;
  }
  else if (day === 'wednesday') {
    return 8;
  }
  else if (day === 'thursday') {
    return 10;
  }
  else if (day === 'friday') {
    return 12;
  }
  else if (day === 'saturday') {
    return 10;
  }
  else if (day === 'sunday') {
    return 8;
  }
};

const getActualSleepHours = () => 6 +  7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = idealHours => idealHours * 7; 

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours(); 
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('617 sheep!');
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You got more than enough sleep!');
    console.log(actualSleepHours - idealSleepHours + ' hour(s) over ideal hours'); 
  }
  else {
    console.log('You need to get some rest!')
    console.log(idealSleepHours - actualSleepHours + ' hour(s) under ideal hours'); 
  }
};

calculateSleepDebt();