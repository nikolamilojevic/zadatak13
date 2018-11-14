class Patient extends Person {
    constructor (firstname, lastname, jmbg, cardNo) {
        super(firstname, lastname)
        this.jmbg  = jmbg
        this.cardNo = cardNo
        this.doctor = null
        Log.log('Patient ' + this.firstname + ' ' + this.lastname + ' created!')
    }
    chooseDoctor(doctor) {
        this.doctor = doctor
        doctor.addPatient(this)
        Log.log('Patient ' + this.firstname + ' ' + this.lastname + ' chose doctor ' + this.doctor.firstname + ' ' + this.doctor.lastname + '.')
    }
}
