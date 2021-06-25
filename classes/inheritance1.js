// parent class also known as superclass
// child class also known as subclasses
// In a constructor(), you must always call the super 
// method before you can use the this keyword 

// you cant access static methods from intances or subclasses
class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }
    static generatePassword(){
        const randomNumber = Math.floor(Math.random()*10000);
        return randomNumber;
    }
    get name(){
        return this._name;
    }
    set name(nameIn){
        this._name = nameIn;
    }
    get remainingVacationDays(){
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications(){
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);


nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
console.log(nurseOlynyk.name);
nurseOlynyk.name = 'Norma';
console.log(nurseOlynyk.name);
