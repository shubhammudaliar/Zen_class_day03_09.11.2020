
// 1. create a request variable
var request = new XMLHttpRequest();

// open a connection
request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=afghanistan&appid=2ca24a112adaa5e22f7c8246a75494f7" , true)

// sending a request
request.send();

// load the response
request.onload= function(){
    var data= JSON.parse(this.response);
    console.log(data);
}

// we are filtering flag key from all the object present in the url.
//var flagurl = request.filter(newflag => newflag.flag);
//console.log(flagurl);
