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
    if ( this.students.includes(studentToRegister.email)) {
        console.log("This email has already been registered.");
    } else {
        this.students.push(studentToRegister.email);
        console.log(`Registering neo@matrix.com to the bootcamp for Web Dev fundamentals. `)
    }
    return fullStack.students;
    }
}

const student1 = new Student("David", "david@gmail.com", "ONCE");
const student2 = new Student("Charles", "charles@gmail.com", "ONCE");
const student3 = new Student("Minae", "charles@gmail.com", "ONCE");

const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");




