const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      const response = ['This is the list of our students'];

      Object.keys(students)
        .sort((a, b) => a.localeCompare(b))
        .forEach((field) => {
          response.push(
            `Number of students in ${field}: ${
              students[field].length
            }. List: ${students[field].join(', ')}`,
          );
        });

      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    try {
      const path = process.argv.length > 2 ? process.argv[2] : '';

      const students = await readDatabase(path);

      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      if (!students[major]) {
        res.status(404).send('No students found in this major');
        return;
      }

      res.status(200).send(`List: ${students[major].join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
