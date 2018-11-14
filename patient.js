class Patient extends Person {
    constructor (firstname, lastname, jmbg, cardNo) {
        super(firstname, lastname)
        this.jmbg  = jmbg
        this.cardNo = cardNo
        this.doctor = null
    }
    chooseDoctor(doctor) {
        this.doctor = doctor
        doctor.addPatient(this)
    }
}

// var Milan = new Patient('Milan', 'Milanovic', '05101981', '01/2018')
// Milan.chooseDoctor(Dragan)

// console.log(Milan)
// console.log(Milan instanceof Person)
