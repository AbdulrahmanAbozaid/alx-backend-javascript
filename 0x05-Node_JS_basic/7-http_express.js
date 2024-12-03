const express = require('express');

const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');

  const path = process.argv.length > 2 ? process.argv[2] : 'njn.csv';

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      res.write('Cannot load the database');
      res.end();
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1); // Remove the header line

    res.write(`Number of students: ${students.length}\n`);

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const [field, names] of Object.entries(fields)) {
      res.write(
        `Number of students in ${field}: ${names.length}. List: ${names.join(
          ', ',
        )}${field === 'SWE' ? '' : '\n'}`,
      );
    }

    res.end();
  });
});

app.listen(1245);

module.exports = app;
