const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (value) => {
  return new Promise(function (resolve, reject) {
    r1.question(value, (answer) => {
      try {
        resolve(answer);
      } catch (err) {
        reject(err);
      }
    });
  });
};

class Course {
  #name;
  #sks;
  #score;

  constructor(param_name, param_sks, param_score) {
    this.#name = param_name;
    this.#sks = param_sks;
    this.#score = param_score;
  }

  get getSks() {
    return this.#sks;
  }
  set setSks(value) {
    this.#sks = value;
  }

  getGrade() {
    //Your code here
    /*  Method getGrade called to return grade from score with rule below
          score >= 85 => return "A"
          score >= 70 => return "B"
          score >= 55 => return "C"
          score < 55 => return "D"
      */
    // let arr = [];
    if (this.#score < 55) return 'D';
    if (this.#score >= 55 && this.#score < 70) return 'C';
    if (this.#score >= 70 && this.#score < 85) return 'B';
    if (this.#score >= 85) return 'A';

    // return arr;
  }
}

class Student {
  #name;
  #listCourse = [];

  constructor(param_name) {
    this.#name = param_name;
    this.#listCourse;
  }

  get getStudentName() {
    return this.#name;
  }
  set setStudentName(value) {
    this.#name = value;
  }

  set setListCourse(value) {
    if (typeof value != 'object') {
      console.log('Wrong Type');
    } else {
      this.#listCourse.push(value);
    }
  }

  get getListCourse() {
    return this.#listCourse;
  }

  countTotalSKS() {
    //Your code here
    /*
              Method countTotalSKS return total SKS from the student
          */
    let sks = 0;
    for (let i = 0; i <= this.#listCourse[0].length - 1; i++) {
      sks += this.#listCourse[0][i].getSks;
    }

    return sks;
  }
}

class University {
  #name;
  #obj_student;

  constructor(param_name) {
    this.#name = param_name;
    this.#obj_student;
  }

  get getStudent() {
    return this.#obj_student;
  }
  set setStudent(value) {
    this.#obj_student = value;
  }

  get universityName() {
    return this.#name;
  }

  studentStatus() {
    //Your code here
    /*
              Method studentStatus return status of the student with this condition
              - If total SKS < 10 then show "[Student Name] Credit is not enough to graduate"
              - If the student has at least one Course with grade D, then show "Sorry, [Student Name] Not Pass"
              - If the student passed 2 rules above, then show "Congrats, [Student Name] Pass"
          */

    if (this.#obj_student.countTotalSKS() < 10)
      return `${
        this.#obj_student.getStudentName
      } Credit is not enough to graduate`;
    // if (!this.#obj_student.countTotalSKS() < 10) return 'Credit enough';
    let grades = [];
    for (let i = 0; i <= this.#obj_student.getListCourse[0].length - 1; i++) {
      grades.push(this.#obj_student.getListCourse[0][i].getGrade());
    }

    for (let i = 0; i <= this.#obj_student.getListCourse[0].length - 1; i++) {
      if (grades.includes('D')) {
        return `Sorry, ${this.#obj_student.getStudentName} Not Pass`;
      } else {
        return `Congrats, ${this.#obj_student.getStudentName} Pass`;
      }
    }
  }
}

// const Course1 = new Course('Programming', 2, 50);
// const Course2 = new Course('Database', 4, 50);
// const Course3 = new Course('Algoritma', 3, 80);
// const Bill = new Student('Bill');
// Bill.setListCourse = Course1;
// Bill.setListCourse = Course2;
// Bill.setListCourse = Course3;

// const Univ = new University('CodingID Learning Center');
// Univ.setStudent = Bill;
// Univ.studentStatus();

// const Course11 = new Course('Programming', 3, 70);
// const Course22 = new Course('Database', 3, 90);
// const Course33 = new Course('Algoritma', 4, 50);
// const Jonathan = new Student('Jonathan');
// Jonathan.setListCourse = Course11;
// Jonathan.setListCourse = Course22;
// Jonathan.setListCourse = Course33;

// const Univ1 = new University('CodingID Learning Center');
// Univ1.setStudent = Jonathan;
// Univ1.studentStatus();

// const Course111 = new Course('Programming', 4, 70);
// const Course222 = new Course('Database', 4, 60);
// const Course333 = new Course('Algoritma', 4, 60);
// const Wardoyo = new Student('Wardoyo');
// Wardoyo.setListCourse = Course111;
// Wardoyo.setListCourse = Course222;
// Wardoyo.setListCourse = Course333;

// const Univ2 = new University('CodingID Learning Center');
// Univ2.setStudent = Wardoyo;
// Univ2.studentStatus();

// ! questions function

const main = async () => {
  // question here
  const universityName = await questions('Input University: ');
  const studentName = await questions('Input Student Name: ');

  let listCourses = [];
  for (let i = 1; i <= 3; i++) {
    const courseName = await questions(`\nInput Course ${i} Name: `);
    const courseSks = await questions(`Input Course ${i} SKS: `);
    const courseScore = await questions(`Input Course ${i} Score: `);

    const courses = new Course(courseName, +courseSks, +courseScore);
    listCourses.push(courses);
  }

  const student = new Student(studentName);
  student.setListCourse = listCourses;

  const university = new University(universityName);
  university.setStudent = student;

  for (let i = 0; i <= student.getListCourse[0].length - 1; i++) {
    console.log(student.getListCourse[0][i].getGrade());
  }

  console.log(
    `${university.universityName} Information: ${university.studentStatus()}`
  );

  process.exit();
};

main();
