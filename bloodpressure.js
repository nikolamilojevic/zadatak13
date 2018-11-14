class BloodPressureExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Pressure Exam'
    }
    perform() {
        this.results = {
            upper: '125',
            over: '75',
            pulse: '74'
        }
        this.printResults()
    }
}
