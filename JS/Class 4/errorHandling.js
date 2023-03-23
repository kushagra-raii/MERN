// GETTER SETTER

// getter -> access properties
// setter -> change or mutate properties


let person = {
    fName : 'Love',
    lName : 'Babbar',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value) {
        if(typeof value !== 'string') {
            throw new Error("You have not sent a string");
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};



// console.log(person);




console.log(person.fullName);
try {
    person.fullName = "abc bbc";
}
catch (e) {
    alert(e);
}



