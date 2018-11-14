var Dragan = new Doctor ('Dragan', 'Draganovic', 'hirurgija')
var Milan = new Patient('Milan', 'Milanovic', '05101981', '01/2018')
Milan.chooseDoctor(Dragan)

Dragan.scheduleExam(BloodSugarExam, Milan, '21.10.2018.', '14:15')
Milan.exam.perform()

Dragan.scheduleExam(BloodPressureExam, Milan, '23.10.2018.', '16:30')
Milan.exam.perform()