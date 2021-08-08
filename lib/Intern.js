const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, schoolName){
        super(name, id, email)
        this.school = schoolName
        
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.schoolName;
    }
}

module.exports = Intern;