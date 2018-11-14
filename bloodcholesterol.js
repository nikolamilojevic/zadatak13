class BloodCholesterolExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Cholesterol Exam'
    }
}

var pregled = new BloodCholesterolExam ('12.10.2018.', '14:00', Milan)

console.log(pregled)

console.log(pregled instanceof LabExam)