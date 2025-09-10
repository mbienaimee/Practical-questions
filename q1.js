class people{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  walk(){
    console.log("I recommend you"+ this.name)
  }
  
}

class student extends people{
  constructor(name,age,grade){
    super(name,age)
    this.grade = grade
  }
  
  study(){
    console.log(`hi I am ${this.name} i am ${this.age}  and I got {this.grade}`)
  }
}

const me = new people("reine",22)
const stu = new student("reine",22,12)
// console.log(me.walk())
console.log(stu.study())