// var btnPrimary = document.getElementById("btn-primary");//document.querySelector("#btn-primary");
// var textIn = document.querySelector("#textInput");
// var textOut = document.querySelector("#textOutput");
// var serverURL = "https://api.funtranslations.com/translate/minion.json";
// function getServerURL(input){
//     return serverURL+"?"+"text="+input;
// }
// function errorHandler(){
//     alert("Technical fault..!! Please try again after some time.");
// }
// function clickHandle(){
//     var inputText = textIn.value;
//     fetch(getServerURL(inputText))
//     .then(response => response.json())
//     .then(json => {
//         textOut.innerText = json.contents.translated;
//     })
//     .catch(errorHandler)
// }
// btnPrimary.addEventListener("click",clickHandle);
var btnPrimary = document.getElementById("btn-primary");
var textIn = document.getElementById("textInput");
var textOut = document.getElementById("textOutput");
var serverURL = "https://api.funtranslations.com/translate/minion.json";
function getServerURL(input){
    return serverURL+"?"+"text="+input;
}
function errorHandler(){
    alert("Technical fault");
}
function clickHandle(){
    var inputText = textIn.Value;
    fetch(getServerURL(inputText))
    .then(response => response.json)
    .then(json => {
        textOut.innerText = json.contents.translated;
    }).catch(errorHandler)
}