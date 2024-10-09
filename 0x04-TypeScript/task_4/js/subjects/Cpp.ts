// Cpp.ts
import { Teacher } from './Teacher';

export namespace Subjects {
  export class Cpp {
    private teacher: Teacher;

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }

    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    public getAvailableTeacher(): string {
      return this.teacher.experienceTeachingC
        ? `Available Teacher: ${this.teacher.firstName}`
        : 'No available teacher';
    }
  }
}
