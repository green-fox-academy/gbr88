'use strict';

import { Student } from './student';

export class Teacher {
  public answer(): void {
    console.log('The teacher is answering a question');
  }

  public teach(student: Student): void {
    student.learn();
  }
}