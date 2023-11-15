/* eslint-disable max-lines-per-function */
/*
Create a school object. The school object uses the same kind of student
object as the previous exercise. It has methods that use and update information
about the student. Be sure to check out the previous exercise for the other
arguments that might be needed by the school object. Implement the following
methods for the school object:

addStudent: Adds a student by creating a new student and adding the student
to a collection of students. The method adds a constraint that the year can
only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
Returns a student object if year is valid otherwise it logs "Invalid Year".

enrollStudent: Enrolls a student in a course.

addGrade: Adds the grade of a student for a course.

getReportCard: Logs the grades of a student for all courses. If the course
has no grade, it uses "In progress" as the grade.

courseReport: Logs the grades of all students for a given course name. Only
student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three
student objects, produce the following values from the getReportCard and
courseReport methods respectively.
*/

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student.`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let course = this.courses.filter(course => {
        return course.code === code;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }
    },

    updateNote(code, note) {
      let course = this.courses.filter(course => {
        return course.code === code;
      })[0];

      if (course) {
        course.note = note;
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty("note")) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },
  };
}


function createSchool() {
  return {
    students: [],

    addStudent: function(name, year) {
      if (["1st", "2nd", "3rd", "4th", "5th"].includes(year)) {
        let student = createStudent(name, year);
        this.students.push(student);
        return student;
      }
      console.log("Invalid year.");
      return undefined;
    },

    enrollStudent: function(student, course) {
      student.addCourse(course);
    },

    addGrade: function(student, code, grade) {
      let course = student.courses.filter(course => {
        return course.code === code;
      })[0];

      course["grade"] = grade;
    },

    getReportCard: function(student) {
      student.courses.forEach(course => {
        if (course.grade) {
          console.log(`${course.name}: ${course.grade}`);
        } else {
          console.log(`${course.name}: In Progress`);
        }
      });
    },

    courseReport: function(courseName) {
      let studentsInCourse = this.students.some(student => {
        return student.courses.filter(course => {
          return course.name === courseName && course.hasOwnProperty("grade");
        }).length !== 0;
      });

      if (!studentsInCourse) {
        console.log(undefined);
        return undefined;
      }

      console.log(`=${courseName} Grades=`);
      let gradeSum = 0;
      let studentsEnrolled = 0;

      this.students.forEach(student => {
        let course = student.courses.filter(course => {
          return course.name === courseName;
        })[0];

        if (course && course.grade) {
          console.log(`${student.name}: ${course.grade}`);
          gradeSum += course.grade;
          studentsEnrolled += 1;
        }
      });

      console.log("---");
      console.log(`Course Average: ${gradeSum / studentsEnrolled}`);
    }
  };
}

let school = createSchool();
let foo = school.addStudent("foo", "3rd");
school.enrollStudent(foo, {name: 'Math', code: 101});
school.enrollStudent(foo, {name: 'Advanced Math', code: 102});
school.enrollStudent(foo, {name: 'Physics', code: 202});
school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = school.addStudent("bar", "1st");
school.enrollStudent(bar, {name: 'Math', code: 101});
school.addGrade(bar, 101, 91);

let qux = school.addStudent("qux", "2nd");
school.enrollStudent(qux, {name: 'Math', code: 101});
school.enrollStudent(qux, {name: 'Advanced Math', code: 102});
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');
