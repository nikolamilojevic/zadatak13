class Patient extends Person {
    constructor (firstname, lastname, jmbg, cardNo) {
        super(firstname, lastname)
        this.jmbg  = jmbg
        this.cardNo = cardNo
        this.doctor = null
    }
}

var Milan = new Patient('Milan', 'Milanovic', '05101981', '01/2018')

console.log(Milan)
console.log(Milan instanceof Person)