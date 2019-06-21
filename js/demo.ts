interface Person {
  firstName:string,
  lastName:number
}

function greeter(person:Person){
  return 'Hello' + person.firstName+"age is "+person.lastName
}
let user = {
  firstName:'zhangsan',
  lastName:28
}

console.log(greeter(user))