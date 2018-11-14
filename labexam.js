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
