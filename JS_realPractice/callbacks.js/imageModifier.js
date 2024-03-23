// Problem:
// You are building a photo editing application where users can upload images and apply various filters to them. Implement a function called applyFilters that takes two parameters: image (object) and filters (array of functions). This function should simulate the process of applying filters to an image and then call the callback function with the processed image. If an error occurs during the filter application process, handle the error and call the callback function with an error message.

function applyFilters(image, filters, callback) {
  setTimeout(() => {
    try {
      filters.forEach((filter) => filter(image))

      callback(null, image)
    } catch (error) {
      callback("Error Errror", null)
    }
  }, 2000)
}

const applyContrast = function (image) {
  console.log("Applying constrast to Image.....")
  image.contrast = "high"
}

const applyBrightness = function (image) {
  console.log("Increased Brightness of Image.....")
  image.brightness = "increased"
}

function filteredcallback(error, filteredimage) {
  if (error) {
    console.log(error)
  } else {
    console.log(
      "The Image is completed processed. The new filtered image is ",
      filteredimage
    )
  }
}

console.log("Appling Filters to the Image.....")

const imageToprocess = {
  name: "example.image",
  width: 100,
  height: 100,
}

const filteringOperations = [applyContrast, applyBrightness]

applyFilters(imageToprocess, filteringOperations, filteredcallback)
