// js/subjects/Teacher.ts
export namespace Subjects {
    export interface Teacher {
      firstName: string;
      lastName: string;
      experienceTeachingC?: number; // Optional attribute for C++
      experienceTeachingJava?: number; // Optional attribute for Java
      experienceTeachingReact?: number; // Optional attribute for React
    }
  }
  