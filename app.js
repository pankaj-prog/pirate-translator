var textInput=document.querySelector("#textvalue");
var button=document.querySelector("#button")
var outputbox=document.querySelector("#output")

var url ="	https://api.funtranslations.com/translate/pirate.json"
function clickHandler(){

    var input=textInput.value;
    function translate(link){
        return link + "?"+"text="+input
    }

    function errorHandler(){
        alert("max limit reached")
    }

    fetch(translate(url))
    .then(response => response.json())
    .then(json =>{
        var translateText = json.contents.translated
        console.log(translateText)
        outputbox.innerText=translateText
    })
    .catch(errorHandler)

}

button.addEventListener("click",clickHandler)