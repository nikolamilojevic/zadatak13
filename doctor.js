class Doctor extends Person {
    constructor (firstname, lastname, speciality) {
        super(firstname, lastname)
        this.speciality  = speciality
        this.patients = []
        Log.log('Doctor ' + this.firstname + ' ' + this.lastname + ' created!')
    }
    addPatient(patient) {
        this.patients.push(patient)
    }
    scheduleExam(exam, patient, date, time) {
        patient.exam = new exam (date, time, patient)
    }
}