let person = {
    fName : "Kushagra",
    lName : "rai",

    get fullName(){
        return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}
console.log(person.fullName);

person.fullName = "Ayush Rai";
console.log(person.fullName);