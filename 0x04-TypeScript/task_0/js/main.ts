interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const st1: Student = {
  firstName: 'Ali',
  lastName: 'Ahmed',
  age: 21,
  location: 'Alexandria',
};
const st2: Student = {
  firstName: 'Abdulrahman',
  lastName: 'Abuzeid',
  age: 21,
  location: 'Cairo',
};

const students = [st1, st2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const hRow = document.createElement('tr');

Object.keys(students[0]).forEach((k) => {
  const th = document.createElement('th');
  th.textContent = k;
  hRow.appendChild(th);
});

thead.appendChild(hRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');

students.forEach((std) => {
  const row = document.createElement('tr');

  Object.values(std).forEach((val) => {
    const field = document.createElement('td');
    field.textContent = val;
    row.appendChild(field);
  });

  tbody.appendChild(row);
});

table.appendChild(tbody);
table.setAttribute('border', '1');
document.body.appendChild(table);
