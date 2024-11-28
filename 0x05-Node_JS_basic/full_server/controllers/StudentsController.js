const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(process.argv[2]);
      res.write('This is the list of our students\n');
      Object.keys(students).forEach((field) => {
        res.write(
          `Number of students in ${field}: ${
            students[field].length
          }. List: ${students[field].join(', ')}\n`,
        );
      });
      res.end();
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}

module.exports = StudentsController;
