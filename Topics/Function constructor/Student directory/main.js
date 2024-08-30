function Student(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;

  // create a method getStudent()
    this.getStudent = function () {
       console.log("Student name: " + this.name + ", student surname: " + this.surname + ", student age: " + this.age);
    };
}

const student = new Student("Alex", "Brown", 28);
