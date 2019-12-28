class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
    if ( Bootcamp.students.includes(studentToRegister)) {
        console.log("This email has already been registered.");
    } else {
        Bootcamp.students.push(studentToRegister);
        console.log(`Registering ${this.email} to the bootcamp for Web Dev fundamentals. `)
    }
    return Bootcamp.students;
    }
}

let student1 = new Student("David", "david@gmail.com", "ONCE");
let student2 = new Student("Charles", "charles@gmail.com", "ONCE");
let student3 = new Student("Minae", "minae@gmail.com", "ONCE");



