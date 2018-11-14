var Dragan = new Doctor ('Dragan', 'Draganovic', 'hirurgija')
var Milan = new Patient('Milan', 'Milanovic', '05101981', '01/2018')
Milan.chooseDoctor(Dragan)

var Pregled = Dragan.scheduleExam(BloodSugarExam, Milan, '21.10.2018.', '14:15')

console.log(Dragan, Milan, Pregled)