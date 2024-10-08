export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((ele) => ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
