class BloodSugarExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Sugar Exam'
    }
}

var pregled = new BloodSugarExam ('12.10.2018.', '14:00', Milan)

console.log(pregled)
console.log(pregled instanceof LabExam)