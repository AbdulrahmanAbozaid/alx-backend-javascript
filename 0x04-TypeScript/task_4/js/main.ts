// Import the necessary classes and interfaces
import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

// Create and export a constant for each subject
const cpp = new Cpp();
const java = new Java();
const react = new React();

// Create and export a teacher object with experienceTeachingC
const cTeacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10, // Assign experienceTeachingC
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher); // Set cTeacher as the teacher for Cpp
console.log(cpp.getRequirements()); // Call getRequirements
console.log(cpp.getAvailableTeacher()); // Call getAvailableTeacher

// Java subject
console.log('Java');
java.setTeacher(cTeacher); // Set cTeacher as the teacher for Java
console.log(java.getRequirements()); // Call getRequirements
console.log(java.getAvailableTeacher()); // Call getAvailableTeacher

// React subject
console.log('React');
react.setTeacher(cTeacher); // Set cTeacher as the teacher for React
console.log(react.getRequirements()); // Call getRequirements
console.log(react.getAvailableTeacher()); // Call getAvailableTeacher
