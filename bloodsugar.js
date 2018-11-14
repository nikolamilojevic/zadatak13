class BloodSugarExam extends LabExam {
    constructor (date, time, patient) {
        super(date, time, patient)
        this.type = 'Blood Sugar Exam'
    }
    perform() {
        this.results = {
            value: '7.5',
            lastMeal: '18:25'
        }
        this.printResults()
    }
}
