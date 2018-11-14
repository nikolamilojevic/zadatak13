class Doctor extends Person {
    constructor (firstname, lastname, speciality) {
        super(firstname, lastname)
        this.speciality  = speciality
        this.patients = []
    }
}

var Dragan = new Doctor ('Dragan', 'Draganovic', 'hirurgija')

console.log(Dragan)
console.log(Dragan instanceof Person)