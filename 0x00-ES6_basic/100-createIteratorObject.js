export default function createIteratorObject(report) {
  return {
    reports: report.allEmployees,
    [Symbol.iterator]() {
      const depts = Object.values(this.reports);

      let currDeptInd = 0;
      let currEmpInd = 0;

      return {
        next() {
          const emps = depts[currDeptInd];

          const noMoreEmps = !(currEmpInd < emps.length);
          if (noMoreEmps) {
            currDeptInd += 1;
            currEmpInd = 0;
          }

          const noMoreDepts = !(currDeptInd < depts.length);
          if (noMoreDepts) {
            return {
              value: undefined,
              done: true,
            };
          }

          const value = depts[currDeptInd][currEmpInd];
          currEmpInd += 1;

          return {
            value,
            done: false,
          };
        },
      };
    },
  };
}
