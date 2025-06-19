function printName (firstName, lastName) {
    capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    console.log(capitalizedFirstName + " " + capitalizedLastName);
};
printName("john", "smith");