'use strict';

import { Student } from './student';
import { Teacher } from './teacher';

// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

let student = new Student();
let teacher = new Teacher();

student.question(teacher);
teacher.teach(student);