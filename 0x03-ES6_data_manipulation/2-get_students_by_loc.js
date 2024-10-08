export default function getStudentsByLocation(stdList, city) {
  if (!Array.isArray(stdList)) return [];

  return stdList.filter((std) => std.location === city);
}
