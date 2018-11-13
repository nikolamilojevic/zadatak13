/* ZDRAVSTVENA USTANOVA */

class Person {
    constructor (firstname, lastname) {
        this.firstname = firstname,
        this.lastname = lastname
    }
}

class Doctor extends Person {
    constructor (firstname, lastname, speciality) {
        super(firstname, lastname)
        this.speciality  = speciality
        this.patients = []
        this.action = 'Doctor ' + firstname + ' ' + lastname + ' created'
        new Log(this.action)
    }
    addPatient(patient) {
        this.patients.push(patient)
    }
    scheduleExam(exam, patient, date, time) {
        patient.exam = new exam (date, time, patient)
    }
}

class Pacient extends Person {
    constructor (firstname, lastname, jmbg, cardNo) {
        super(firstname, lastname)
        this.jmbg  = jmbg
        this.cardNo = cardNo
        this.action = 'Patient ' + firstname + ' ' + lastname + ' created'
        new Log(this.action)
    }
    chooseDoctor(doctor) {
        this.doctor = doctor
        doctor.addPatient(this)
        this.doctorChosen = this.firstname + ' ' + this.lastname + ' chose doctor ' + this.doctor.firstname + ' ' + this.doctor.lastname + '.'
        new Log(this.doctorChosen)
    }
    performExam() {
        this.exam.getResults()
        this.examPerformed = this.firstname + ' ' + this.lastname + ' performed exam: ' + this.exam.type + ' with results: ' + this.exam.results
        new Log(this.examPerformed)
    }
}

class LabExam {
    constructor (date, time, patient) {
        this.schedule(date, time, patient)
    }
    schedule(date, time, patient) {
        this.date = date
        this.time = time
        this.patient = patient
    }
}

class BloodPressureExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Pressure Exam'
        this.action = 'Exam: ' + this.type + ' scheduled'
        new Log(this.action)
    }
    getResults() {
        this.upper = '125'
        this.lower = '75'
        this.pulse = '74'
        this.results = 'Upper: ' + this.upper + ', Lower: ' + this.lower + ', Pulse: ' + this.pulse
    }
}

class BloodSugarExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood sugar Exam'
        this.action = 'Exam: ' + this.type + ' scheduled'
        new Log(this.action)
    }
    getResults() {
        this.value = '7.5'
        this.lastMeal = '21:30'
        this.results = 'Value: ' + this.value + ', Last meal: ' + this.lastMeal
    }
}

class BloodCholesterolExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Cholesterol Exam'
        this.action = 'Exam: ' + this.type + ' scheduled'
        new Log(this.action)
    }
    getResults() {
        this.value = '5.3'
        this.lastMeal = '18:30'
        this.results = 'Value: ' + this.value + ', Last meal: ' + this.lastMeal
    }
}

class Log {
    constructor (action) {
        this.date = new Date();
        this.action = action
        console.log(action)
    }
}


var Milan = new Doctor('Milan', 'Milanovic', 'hirurgija')
var Dragan = new Pacient('Dragan', 'Draganovic', '0510981', '11/2018')

Dragan.chooseDoctor(Milan)
Milan.scheduleExam(BloodPressureExam, Dragan, '2018-10-01', '12:15')
Dragan.performExam()

