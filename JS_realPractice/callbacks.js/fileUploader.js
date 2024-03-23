// Problem:
// You are developing a file management system where users can upload files. After a file is uploaded, you want to perform various operations such as resizing the image if it's an image file, converting the file format, or compressing the file. Implement a function called uploadFile that takes three parameters: file (object), operations (array of functions), and callback (function). This function should simulate the process of uploading a file and then apply the specified operations on the file asynchronously before calling the callback function with the processed file.

// Here's your task:

// Define a function called uploadFile that takes three parameters: file (object), operations (array of functions), and callback (function).
// Inside uploadFile, simulate the process of uploading a file by using setTimeout to delay the execution of code.
// After the delay, apply each function in the operations array to the file object asynchronously. Each function should modify the file object in some way.
// Once all operations are applied, call the callback function with the processed file object.

function uploadFile(file, opearations, callback) {
  setTimeout(() => {
    opearations.forEach((operation) => {
      operation(file)
    })
    callback(file)
  }, 2000)
}

const resize = function (file) {
  if (file.type === "image") {
    file.size /= 2
  }
}

const format = function (file) {
  if (file.format === "jpeg") {
    file.format = "png"
  }
}

function uploadCallback(processedfile) {
  console.log("The new file is :", processedfile)
}

const uploadDetails = {
  name: "exmple.js",
  type: "image",
  format: "jpeg",
  size: 1024, //KB
}

const fileOperations = [format, resize]

console.log("The uploaded File is being Modified......")
uploadFile(uploadDetails, fileOperations, uploadCallback)
