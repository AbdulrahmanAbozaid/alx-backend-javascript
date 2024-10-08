export default function getListStudentIds(studentsArr) {
  return Array.isArray(studentsArr) ? studentsArr.map((std) => std.id) : [];
}
