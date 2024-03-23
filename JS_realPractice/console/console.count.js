for (i = 1; i <= 5; i++) {
  console.count()
}

for (i = 1; i <= 5; i++) {
  let firstLabel = "First Label"
  let secondLabel = "Second Label"

  console.count(firstLabel)
  console.count(secondLabel)
}

//console.countReset(name) is used to reset the count
