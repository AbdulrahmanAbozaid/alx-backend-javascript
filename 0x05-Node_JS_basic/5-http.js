const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');

    fs.readFile(process.argv[2], 'utf-8', (err, data) => {
      if (err) {
        res.write(new Error('Cannot load the database'));
        res.end();
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
  }
});

app.listen(1245);

module.exports = app;
