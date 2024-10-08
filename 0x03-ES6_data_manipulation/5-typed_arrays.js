export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw RangeError('Position outside range');
  const arrBuff = new ArrayBuffer(length);
  const dataView = new DataView(arrBuff);
  dataView.setInt8(position, value);
  return dataView;
}
