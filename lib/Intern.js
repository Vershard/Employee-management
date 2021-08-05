const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, email, schoolName){
        super(name, email, schoolName)
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