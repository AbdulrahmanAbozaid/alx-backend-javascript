export default function hasValuesFromArray(st, arr) {
  return arr.every((ele) => st.has(ele));
}
