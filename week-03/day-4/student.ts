'use strict';

import { Teacher } from './teacher';

export class Student {
  public learn(): void {
    console.log('the student is learning something new');
  }

  public question(teacher: Teacher): void {
    teacher.answer();
  }
}