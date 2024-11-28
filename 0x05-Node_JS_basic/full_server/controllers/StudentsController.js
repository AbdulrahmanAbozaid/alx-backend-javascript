import { readDatabase } from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      const responseLines = ['This is the list of our students'];

      Object.keys(students)
        .sort()
        .forEach((field) => {
          const list = students[field].join(', ');
          responseLines.push(
            `Number of students in ${field}: ${students[field].length}. List: ${list}`
          );
        });

      res.status(200).send(responseLines.join('\n'));
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase('./database.csv');
      const majorStudents = students[major] || [];
      const list = majorStudents.join(', ');

      res.status(200).send(`List: ${list}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
