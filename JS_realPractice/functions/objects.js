let person = {
  _name: "musharaf",
  _age: 20,
  welcome() {
    console.log(`Welcome ${this._name}`)
  },
  get nameChange() {
    if (typeof this._name === "string") {
      return this._name
    } else {
      return "The name is not a string"
    }
  },
  set nameChange(value) {
    if (typeof value === "string") {
      this._name = value
    } else {
      console.log("You cannot set the name")
    }
  },
}

person._name = 2
console.log(person.nameChange) // Output: "The name is not a string"
person.nameChange = "John"
console.log(person.nameChange) // Output: "John"
