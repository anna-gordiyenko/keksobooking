function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (max < min) ? Math.floor(Math.random() * (min - max + 1)) + max : Math.floor(Math.random() * (max - min + 1)) + min;}
getRandomIntInclusive();

function getRandomСoordinate(min, max) {
  min = Math.ceil(min*100)/100;
  max = Math.floor(max*100)/100;
  return (max < min) ? Math.floor((Math.random() * (min - max + 1))*100)/100 + max : Math.floor((Math.random() * (max - min + 1))*100)/100 + min;
}
getRandomСoordinate();
