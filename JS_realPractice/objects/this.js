let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!")
  },
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  greenEnergy() {
    this["Fuel Type"] = "avocado oil"
  },
  remotelyDisable() {
    this["disabled"] = true
  },
}
spaceship.color = "glorious gold"
spaceship.numEngines = 7
delete spaceship["Secret Mission"]
spaceship.takeOff()
spaceship.greenEnergy()
spaceship.remotelyDisable()
console.log(spaceship)

//you cannot use this in arrow functions , if you do it will just return undefined in place of our required result.
