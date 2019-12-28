const Student = {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
}

function registerStudent(studentToRegister) {
    if ( Bootcamp.students.includes(studentToRegister)) {
        console.log("This email has already been registered.");
    } else {
        Bootcamp.students.push(studentToRegister);
    }
}

