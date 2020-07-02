const parentElement= document.querySelector("body")
const buttonOne= document.createElement("button")
const MainElement= document.createElement("main")
const ImageOne= document.createElement("img")
const anchor= document.createElement("a")

parentElement.append(buttonOne)
parentElement.append(MainElement)
MainElement.append(ImageOne)
MainElement.append(anchor)
buttonOne.append("RemoveButton")
anchor.append("https://my.kenzie.academy/")

ImageOne.classname = "Image"
anchor.classname = "a"

ImageOne.src = "C:/Users/malac/Downloads/wolfpup3.jpg"
anchor.href = "https://my.kenzie.academy/"; 

buttonOne.addEventListener("click", function () {
     MainElement.remove ()
 })