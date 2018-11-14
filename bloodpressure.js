class BloodPressureExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Pressure Exam'
    }
}

var pregled = new BloodPressureExam ('12.10.2018.', '14:00', Milan)

console.log(pregled)
console.log(pregled instanceof LabExam)