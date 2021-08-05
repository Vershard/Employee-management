const Engineer = require("./Engineer")

class Engineer extends Employee {
    constructor(name, gitHub, email, officeNumber){
        super(name, gitHub, email)
        this.officeNumber = officeNumber
        
    }

    getRole(){
        return "Engineer";
    }

    getOfficeNumber(){
        return this.OfficeNumber;
    }
}

module.exports = Engineer;