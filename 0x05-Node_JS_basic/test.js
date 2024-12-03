const fs = require('fs');

function countStudents(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err || !data) {
        rej(new Error('Cannot load file'));
        return;
      }
      data = data
        .split('\n')
        .filter((ln) => ln.trim() !== '')
        .slice(1)
        .map((ln) => ln.split(','));
      console.log('Number of students:', data.length);
      const fields = {};
      data.forEach((row) => {
        let key = row[row.length - 1];

        if (!(key in fields)) {
          fields[key] = new Array();
        }
        fields[key].push(row[0]);
      });

      for (const [f, r] of Object.entries(fields)) {
        console.log(`Number of students in ${f}: 6. List: ${r.join(', ')}`);
      }
      res();
    });
  });
}

countStudents('database.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
