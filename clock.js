var whatTimeIsIt = function (angle) {
  let oneMinute = 6;
  let oneHour = 30;
  let minutes = Math.floor(angle % oneHour) / oneMinute;
  let hours = Math.floor(angle / oneHour);
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }
  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};
console.log(whatTimeIsIt(40))
