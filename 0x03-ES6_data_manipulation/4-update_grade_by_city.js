export default function updateStudentGradeByCity(stdList, city, newGrades) {
  return stdList
    .filter((std) => std.location === city)
    .map((ele) => {
      const currId = newGrades.filter((gd) => gd.studentId === ele.id);
      if (currId && currId.length) {
        return { ...ele, grade: currId[0].grade };
      }
      return { ...ele, grade: 'N/A' };
    });
}
