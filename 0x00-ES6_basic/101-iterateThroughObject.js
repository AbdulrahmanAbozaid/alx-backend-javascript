export default function iterateThroughObject(reportWithIterator) {
  const iter = reportWithIterator[Symbol.iterator]();
  let currItem = iter.next();
  let str = '';

  if (!currItem.done) str += currItem.value;

  currItem = iter.next();

  while (!currItem.done) {
    str += ` | ${currItem.value}`;
    currItem = iter.next();
  }

  return str;
}
