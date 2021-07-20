const talkingCalendar = (date) => {
  const splitted = date.split("/");
  let output = "";

  switch (Number(splitted[1])) {
  case 1:
    output += "January";
    break;
  case 2:
    output += "Febuary";
    break;
  case 3:
    output += "March";
    break;
  case 4:
    output += "April";
    break;
  case 5:
    output += "May";
    break;
  case 6:
    output += "June";
    break;
  case 7:
    output += "July";
    break;
  case 8:
    output += "August";
    break;
  case 9:
    output += "September";
    break;
  case 10:
    output += "October";
    break;
  case 11:
    output += "November";
    break;
  case 12:
    output += "December";
  }

  if (Number(splitted[2]) < 10) {
    splitted[2] = splitted[2].substr(1,1);
  }

  if (Number(splitted[2]) === 2) {
    output += ` ${splitted[2]}nd, `;
  } else if (Number(splitted[2]) === 3) {
    output += ` ${splitted[2]}rd, `;
  } else {
    output += ` ${splitted[2]}th, `;
  }
  
  output += splitted[0];
  return output;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));