// why we need classes ?
// suppose i want to print data of 100 students who will have the same properties like name , rollno and  class then i cannot create 100 objects .right! although i can create , but this will waste a lot of time and violates DRY(Dont Repeat Yourself) principle
//  so , what i will do is that i will create a bluePrint ,or a basic template and create objects through It .DRY
// class is just a blueprint, template of object

let data = "secret Information"
class User {
  constructor(name, email) {
    ;(this.name = name), (this.email = email)
  }
  viewData() {
    console.log(data)
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email)
  } //here , we inherited user class properties and methods in Admin class using "extends" and "super".
  editData() {
    data = "new Information"
  }
}

const student1 = new User("Musharaf", "musha630@email.com")
const student2 = new User("Umar", "umar356@email.com")
const teacher = new Admin("rajesh", "rajesh123@email.com")
console.log(student1.name, student1.email)
console.log(student2)
console.log(teacher)
