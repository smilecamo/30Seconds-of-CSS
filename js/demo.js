function greeter(person) {
    return 'Hello' + person.firstName + "age is " + person.lastName;
}
var user = {
    firstName: 'zhangsan',
    lastName: 28
};
console.log(greeter(user));
