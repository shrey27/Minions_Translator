var btnPrimary = document.getElementById("btn-primary");//document.querySelector("#btn-primary");
var textIn = document.querySelector("#textInput");
var textOut = document.querySelector("#textOutput");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getServerURL(input){
    return serverURL+"?"+"text="+input;
}
function errorHandler(){
    alert("Technical fault..!! Please try again after some time.");
}
function clickHandle(){
    var inputText = textIn.value;
    fetch(getServerURL(inputText))
    .then(response => response.json())
    .then(json => {
        textOut.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}
btnPrimary.addEventListener("click",clickHandle);

//Redo code
// ******************************************************* //
// var btnPrimary = document.getElementById("btn-primary");
// var textInput = document.getElementById("textInput");
// var textOutput = document.getElementById("textOutput");
// var url = "https://api.funtranslations.com/translate/minion.json";
// function getServerURL(input){
//     return url+"?"+"text="+input;
// }
// function errorHandler(){
//     alert("technical fault occurred");
// }
// function clickHandle(){
//     var inputText = textInput.value;
//     fetch(getServerURL(inputText))
//     .then(response=>response.json())
//     .then(json => {
//         textOutput.innerText = json.contents.translated;
//     })
//     .catch(errorHandler);
// }
// btnPrimary.addEventListener("click",clickHandle);