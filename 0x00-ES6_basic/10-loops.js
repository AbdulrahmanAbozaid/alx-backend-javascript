export default function appendToEachArrayValue(array, appendString) {
  for (let value of [...array]) {
    value = appendString + value;
    array.shift();
    array.push(value);
  }

  return array;
}
