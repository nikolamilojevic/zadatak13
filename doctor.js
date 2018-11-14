class Doctor extends Person {
    constructor (firstname, lastname, speciality) {
        super(firstname, lastname)
        this.speciality  = speciality
        this.patients = []
    }
    addPatient(patient) {
        this.patients.push(patient)
    }
    scheduleExam(exam, patient, date, time) {
        patient.exam = new exam (date, time, patient)
    }
}

// var Dragan = new Doctor ('Dragan', 'Draganovic', 'hirurgija')
// var Pregled = Dragan.scheduleExam(BloodSugarExam, Milan, '21.10.2018.', '14:15')

// console.log(Dragan)
// console.log(Dragan instanceof Person)