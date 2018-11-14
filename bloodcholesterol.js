class BloodCholesterolExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Cholesterol Exam'
    }
    perform() {
        this.results = {
            value: '16.5',
            lastMeal: '21:40'
        }
        this.printResults()
    }
}
